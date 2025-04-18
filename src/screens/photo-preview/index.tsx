"use client";

import AppContext from "@/contexts/app";
import { uploadToIPFS } from "@/utils/pinata";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { PhotoPreviewScreenWrapper } from "./styled";
import { Flex } from "@/styles/common";

interface PhotoPreviewScreenProps {}
/* N */
/* Mofusand frame */
const drawMofusandFrame = (ctx: any, canvas: any) => {
  const frameImg = new Image();
  frameImg.src = `${process.env.basePath}/img/Khung1.png`;
  const scale = 2; // hoặc tăng cao hơn nếu vẫn bể

  frameImg.onload = () => {
    ctx.drawImage(frameImg, 0, 0, canvas.width / scale, canvas.height / scale);
  };
};

/* Crayon Shin Chan Frame */
const drawShinChanFrame = (ctx: any, canvas: any) => {
  const frameImg = new Image();
  frameImg.src = `${process.env.basePath}/img/Khung2.png`;

  const scale = 2; // hoặc tăng cao hơn nếu vẫn bể

  frameImg.onload = () => {
    ctx.drawImage(frameImg, 0, 0, canvas.width / scale, canvas.height / scale);
  };
};

/* Miffy Frame */
const drawMiffyFrame = (ctx: any, canvas: any) => {
  const frameImg = new Image();
  frameImg.src = `${process.env.basePath}/img/Khung3.png`;
  const scale = 2; // hoặc tăng cao hơn nếu vẫn bể
  frameImg.onload = () => {
    ctx.drawImage(frameImg, 0, 0, canvas.width / scale, canvas.height / scale);
  };
};

const frames: any = {
  none: {
    draw: (ctx: any, x: any, y: any, width: any, height: any) => {},
  },
  pastel: {
    draw: (ctx: any, x: any, y: any, width: any, height: any) => {
      const drawSticker = (x: any, y: any, type: any) => {
        switch (type) {
          case "star":
            ctx.fillStyle = "#FFD700";
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "heart":
            ctx.fillStyle = "#cc8084";
            ctx.beginPath();
            const heartSize = 22;
            ctx.moveTo(x, y + heartSize / 4);
            ctx.bezierCurveTo(x, y, x - heartSize / 2, y, x - heartSize / 2, y + heartSize / 4);
            ctx.bezierCurveTo(x - heartSize / 2, y + heartSize / 2, x, y + heartSize * 0.75, x, y + heartSize);
            ctx.bezierCurveTo(
              x,
              y + heartSize * 0.75,
              x + heartSize / 2,
              y + heartSize / 2,
              x + heartSize / 2,
              y + heartSize / 4
            );
            ctx.bezierCurveTo(x + heartSize / 2, y, x, y, x, y + heartSize / 4);
            ctx.fill();
            break;
          case "flower":
            ctx.fillStyle = "#FF9BE4";
            for (let i = 0; i < 5; i++) {
              ctx.beginPath();
              const angle = (i * 2 * Math.PI) / 5;
              ctx.ellipse(x + Math.cos(angle) * 10, y + Math.sin(angle) * 10, 8, 8, 0, 0, 2 * Math.PI);
              ctx.fill();
            }
            // Center of flower
            ctx.fillStyle = "#FFE4E1";
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.fill();
            break;
          case "bow":
            ctx.fillStyle = "#f9cee7";
            // Left loop
            ctx.beginPath();
            ctx.ellipse(x - 10, y, 10, 6, Math.PI / 4, 0, 2 * Math.PI);
            ctx.fill();
            // Right loop
            ctx.beginPath();
            ctx.ellipse(x + 10, y, 10, 6, -Math.PI / 4, 0, 2 * Math.PI);
            ctx.fill();
            // Center knot
            ctx.fillStyle = "#e68bbe";
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
            break;
        }
      };

      // Top left corner
      drawSticker(x + 11, y + 5, "bow");
      drawSticker(x - 18, y + 95, "heart");

      // Top right corner
      drawSticker(x + width - 160, y + 10, "star");
      drawSticker(x + width - 1, y + 50, "heart");

      // Bottom left corner
      drawSticker(x + 120, y + height - 20, "heart");
      drawSticker(x + 20, y + height - 20, "star");

      // Bottom right corner
      drawSticker(x + width - 125, y + height - 5, "bow");
      drawSticker(x + width - 10, y + height - 45, "heart");
    },
  },

  cute: {
    draw: (ctx: any, x: any, y: any, width: any, height: any) => {
      const drawStar = (centerX: any, centerY: any, size: any, color = "#FFD700") => {
        ctx.fillStyle = color;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
          const point = i === 0 ? "moveTo" : "lineTo";
          ctx[point](centerX + size * Math.cos(angle), centerY + size * Math.sin(angle));
        }
        ctx.closePath();
        ctx.fill();
      };

      const drawCloud = (centerX: any, centerY: any) => {
        ctx.fillStyle = "#87CEEB";
        const cloudParts = [
          { x: 0, y: 0, r: 14 },
          { x: -6, y: 2, r: 10 },
          { x: 6, y: 2, r: 10 },
        ];
        cloudParts.forEach((part) => {
          ctx.beginPath();
          ctx.arc(centerX + part.x, centerY + part.y, part.r, 0, Math.PI * 2);
          ctx.fill();
        });
      };

      // Draw decorations around the frame
      // Top corners
      drawStar(x + 150, y + 18, 15, "#FFD700");
      drawCloud(x + 20, y + 5);
      drawStar(x + width - 1, y + 45, 12, "#FF69B4");
      drawCloud(x + width - 80, y + 5);

      // Bottom corners
      drawCloud(x + 150, y + height - 5);
      drawStar(x + 0, y + height - 65, 15, "#9370DB");
      drawCloud(x + width - 5, y + height - 85);
      drawStar(x + width - 120, y + height - 5, 12, "#40E0D0");
    },
  },

  serenity: {
    draw: (ctx: any, x: any, y: any, width: any, height: any) => {},
  },

  blossom: {
    draw: (ctx: any, x: any, y: any, width: any, height: any) => {},
  },

  enternal: {
    draw: (ctx: any, x: any, y: any, width: any, height: any) => {},
  },
};
const PhotoPreviewScreen = () => {
  const stripCanvasRef = useRef<any>(null);
  const navigate = useRouter();
  const [stripColor, setStripColor] = useState<any>("white");
  const [selectedFrame, setSelectedFrame] = useState<any>("serenity");

  const [qrCodeUrl, setQrCodeUrl] = useState<any>("");
  const [isGeneratingQR, setIsGeneratingQR] = useState<any>(false);
  const [qrCodeStatus, setQrCodeStatus] = useState<any>("");
  const [copied, setCopied] = useState<any>(false);
  const { capturedImages } = useContext(AppContext);

  useEffect(() => {
    try {
      let win = window as any;

      (win.adsbygoogle = win.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  const copyToClipboard = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const generatePhotoStrip = useCallback(() => {
    const canvas = stripCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgWidth = 415;
    const imgHeight = 305;
    const borderSize = 30;
    const photoSpacing = 12;
    const textHeight = 55;
    const totalHeight = imgHeight * 4 + photoSpacing * 3 + borderSize * 2 + textHeight;
    const scale = 2.0; // Adjust this value to change the size of the canvas

    const frameImg = new Image();
    frameImg.src = `${process.env.basePath}/img/Khung1.png`;

    frameImg.onload = async () => {
      // Setup canvas size and scale
      canvas.width = scale * imgWidth + borderSize * 2;
      canvas.height = scale * totalHeight;
      canvas.style.width = `${canvas.width / scale}px`;
      canvas.style.height = `${canvas.height / scale}px`;

      ctx.scale(scale, scale);
      ctx.fillStyle = stripColor;
      ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale);

      if (capturedImages.length === 0) {
        drawText(ctx, canvas.width / scale, totalHeight);
        return;
      }

      // Load all images as promises
      const loadedImages = await Promise.all(
        capturedImages.map((src: any) => {
          return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
          });
        })
      );

      // Draw each image
      loadedImages.forEach((img, index) => {
        const yOffset = borderSize + (imgHeight + photoSpacing) * index;

        const imageRatio = img.width / img.height;
        const targetRatio = imgWidth / imgHeight;

        let sourceWidth = img.width;
        let sourceHeight = img.height;
        let sourceX = 0;
        let sourceY = 0;

        if (imageRatio > targetRatio) {
          sourceWidth = sourceHeight * targetRatio;
          sourceX = (img.width - sourceWidth) / 2;
        } else {
          sourceHeight = sourceWidth / targetRatio;
          sourceY = (img.height - sourceHeight) / 2;
        }

        ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, borderSize, yOffset, imgWidth, imgHeight);

        if (frames[selectedFrame] && typeof frames[selectedFrame].draw === "function") {
          frames[selectedFrame].draw(ctx, borderSize, yOffset, imgWidth, imgHeight);
        }
      });

      drawText(ctx, canvas.width / scale, totalHeight);
    };

    frameImg.onerror = () => {
      console.error("Failed to load frame image");
    };

    const drawText = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => {
      const now = new Date();
      const timestamp = `${now.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })}  ${now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}`;

      ctx.fillStyle = stripColor === "black" || stripColor === "800000" ? "#FFFFFF" : "#000000";
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.fillText(timestamp, canvasWidth / 2, canvasHeight - borderSize);

      ctx.fillStyle = stripColor === "black" || stripColor === "800000" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
      ctx.font = "12px Arial";
      ctx.fillText("© 2025", canvasWidth - borderSize, canvasHeight - borderSize / 2);

      if (selectedFrame === "serenity") {
        drawMofusandFrame(ctx, canvas);
      } else if (selectedFrame === "blossom") {
        drawShinChanFrame(ctx, canvas);
      } else if (selectedFrame === "enternal") {
        drawMiffyFrame(ctx, canvas);
      }
    };
  }, [capturedImages, stripColor, selectedFrame]);

  useEffect(() => {
    if (capturedImages.length === 4) {
      setTimeout(() => {
        console.log("generatePhotoStrip");
        generatePhotoStrip();
      }, 100);
    }
  }, [capturedImages, stripColor, selectedFrame]);

  const downloadPhotoStrip = () => {
    const link = document.createElement("a");
    link.download = "photostrip.jpg";
    link.href = stripCanvasRef.current.toDataURL("image/jpeg", 0.8);
    link.click();
  };

  const dataURLtoBlob = (data_url: string) => {
    const arr = data_url.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  };

  function makeid(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const generateQRCode = async () => {
    try {
      setIsGeneratingQR(true);
      setQrCodeUrl("");

      // Optimize the canvas image before sending
      const canvas = stripCanvasRef.current;

      // Create a smaller version of the image for QR code generation
      const optimizedCanvas = document.createElement("canvas");
      const targetWidth = 800; // Reduced from original size
      const aspectRatio = canvas.height / canvas.width;
      const targetHeight = targetWidth * aspectRatio;

      optimizedCanvas.width = targetWidth;
      optimizedCanvas.height = targetHeight;

      // Draw original canvas content to the smaller canvas
      const ctx: any = optimizedCanvas.getContext("2d");
      ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, targetWidth, targetHeight);

      // Use lower quality WebP for faster upload
      const optimizedImageData = optimizedCanvas.toDataURL("image/jpeg", 0.85);
      const blob = dataURLtoBlob(optimizedImageData);
      const file = new File([blob], `${makeid(10)}.jpg`, { type: "image/jpeg" });

      // Add a timeout to ensure UI updates before the network request
      setTimeout(async () => {
        try {
          const url = await uploadToIPFS(file);
          const publicUrl = `https://gateway.pinata.cloud/ipfs/${url}`;
          setQrCodeUrl(publicUrl);
        } catch (error) {
          console.error("Error generating QR code:", error);
          setQrCodeStatus("Failed to generate QR code. Please try again.");
        } finally {
          setIsGeneratingQR(false);
        }
      }, 100); // Small timeout for UI update
    } catch (error) {
      console.error("Error preparing image:", error);
      setQrCodeStatus("Failed to prepare image. Please try again.");
      setIsGeneratingQR(false);
    }
  };

  const handleShareToFacebook = async () => {
    if (qrCodeUrl) {
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(qrCodeUrl)}/`;
      window.open(facebookShareUrl, "_blank");
    }
  };

  useEffect(() => {
    if (capturedImages.length == 0 || !capturedImages) {
      navigate.push("/photobooth");
    }
  }, []);

  useEffect(() => {
    if (selectedFrame) {
      setQrCodeUrl("");
    }
  }, [selectedFrame]);

  return (
    <PhotoPreviewScreenWrapper>
      {" "}
      <div className="photo-preview">
        <h1>Photo Strip Preview</h1>

        <div className="control-section-top">
          <p className="section-title">Frames</p>
          <div className="frame-options">
            <button onClick={() => setSelectedFrame("enternal")}>Froggy</button>
            <button onClick={() => setSelectedFrame("blossom")}>Whisper</button>
            <button onClick={() => setSelectedFrame("serenity")}>Dreamy</button>
          </div>
        </div>
        <Flex align="center">
          

          <canvas ref={stripCanvasRef} className="photo-strip" />
        </Flex>
        <div className="control-section-bottom">
            <div className="action-buttons" style={{ paddingTop: `${qrCodeUrl ? "165px" : "0px"} ` }}>
              <button onClick={() => navigate.push("/photobooth")}> Take New Photos</button>
              <button onClick={downloadPhotoStrip}> Download Photo Strip</button>

              <button onClick={generateQRCode} disabled={isGeneratingQR}>
                {isGeneratingQR ? "Generating..." : "QR Code or Share"}
              </button>
            </div>

            {qrCodeUrl && (
              <div className="qr-code-section">
                <h3>QR Code</h3>

                <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrCodeUrl}
                    viewBox={`0 0 512 512`}
                  />
                </div>

                <button onClick={() => copyToClipboard(qrCodeUrl)}>Copy Link</button>
                <div className="action-buttons">
                  <button onClick={handleShareToFacebook}>Share To Facebook</button>
                </div>
                {copied && <p style={{ color: "green", fontSize: "14px" }}>Link copied!</p>}
              </div>
            )}
          </div>
      </div>
    </PhotoPreviewScreenWrapper>
  );
};

export default PhotoPreviewScreen;
