"use client";


import AppContext from "@/contexts/app";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { PhotoBoothScreenWrapper } from "./styled";

const PhotoBoothScreen = () => {
  const navigate = useRouter();
  const videoRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const [capturedImages, setImages] = useState<any>([]);
  const [filter, setFilter] = useState<any>("none");
  const [cssFilter, setCssFilter] = useState<any>(""); // Add this line
  const [countdown, setCountdown] = useState<any>(null);
  const [capturing, setCapturing] = useState<any>(false);
  const [isMobile, setIsMobile] = useState<any>(false);
  const [countdownTime, setCountdownTime] = useState<any>(5);
  const { setCapturedImages } = useContext(AppContext);

  useEffect(() => {
    startCamera();

    const checkMobile = () => {
      const win = window as any;

      const userAgent = navigator.userAgent || navigator.vendor || win.opera;
      const mobileRegex = /android|ipad|iphone|ipod|windows phone/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    checkMobile();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        startCamera();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track: any) => track.stop());
      }
    };
  }, []);

  // Start Camera
  const startCamera = async () => {
    try {
      if (videoRef.current && videoRef.current.srcObject) {
        return;
      }

      const constraints = {
        video: {
          facingMode: { ideal: "user" },
          width: { ideal: isMobile ? 1280 : 1280 },
          height: { ideal: isMobile ? 720 : 720 },
          frameRate: { ideal: 30 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        try {
          await videoRef.current.play();
        } catch (err) {
          console.error("Error playing video:", err);
        }
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access your camera. Please ensure camera permissions are granted in your browser settings.");
    }
  };

  // apply fitler using canvas api
  const applyFilterToCanvas = (sourceCanvas: any, filterType: any) => {
    const ctx = sourceCanvas.getContext("2d");

    // Save the original image data before applying filters
    const imageData = ctx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
    const data = imageData.data;

    switch (filterType) {
      case "smooth-skin":
        // Soft effect with adjusted brightness, contrast, saturation and a little blur
        for (let i = 0; i < data.length; i += 4) {
          // Điều chỉnh độ sáng (brightness)
          data[i] = Math.min(255, data[i] * 1.05); // R component
          data[i + 1] = Math.min(255, data[i + 1] * 1.05); // G component
          data[i + 2] = Math.min(255, data[i + 2] * 1.05); // B component

          // Điều chỉnh độ tương phản nhẹ (contrast)
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i] * 0.95 + avg * 0.05; // R component with reduced contrast
          data[i + 1] = data[i + 1] * 0.95 + avg * 0.05; // G component with reduced contrast
          data[i + 2] = data[i + 2] * 0.95 + avg * 0.05; // B component with reduced contrast

          // Điều chỉnh độ bão hòa nhẹ (saturation)
          const avgColor = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i] * 1.05 + avgColor * 0.05; // Apply soft saturation effect
          data[i + 1] = data[i + 1] * 1.05 + avgColor * 0.05;
          data[i + 2] = data[i + 2] * 1.05 + avgColor * 0.05;
        }
        break;

      default:
        break;
    }

    ctx.putImageData(imageData, 0, 0);
    return sourceCanvas;
  };

  useEffect(() => {
    switch (filter) {
      case "smooth-skin":
        setCssFilter("brightness(105%) contrast(95%) saturate(110%)");
        break;
      default:
        setCssFilter(filter);
        break;
    }
  }, [filter]);

  // Countdown to take 4 pictures automatically
  const startCountdown = () => {
    if (capturing) return;
    setCapturing(true);

    setImages([]);

    let photosTaken = 0;
    const newCapturedImages: any = [];

    const captureSequence = async () => {
      if (photosTaken >= 4) {
        setCountdown(null);
        setCapturing(false);

        try {
          setCapturedImages([...newCapturedImages]);
          setTimeout(() => {
            navigate.push("/preview");
          }, 300);
        } catch (error) {
          console.error("Error navigating to preview:", error);
          // If navigation fails, at least display the images
          setImages([...newCapturedImages]);
        }
        return;
      }

      let timeLeft = countdownTime;
      setCountdown(timeLeft);

      const timer = setInterval(() => {
        timeLeft -= 1;
        setCountdown(timeLeft);

        if (timeLeft === 0) {
          clearInterval(timer);
          const imageUrl = capturePhoto();
          if (imageUrl) {
            newCapturedImages.push(imageUrl);
            setImages((prevImages: any) => [...prevImages, imageUrl]);
          }
          photosTaken += 1;
          setTimeout(captureSequence, 1000);
        }
      }, 1000);
    };

    captureSequence();
  };

  // Capture Photo
  const capturePhoto = () => {
    const video: any = videoRef.current;
    const canvas: any = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");

      console.log("Device Info:", {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        touchPoints: navigator.maxTouchPoints,
        isMobile,
      });

      const targetWidth = 1280;
      const targetHeight = 720;

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const videoRatio = video.videoWidth / video.videoHeight;
      const targetRatio = targetWidth / targetHeight;

      let drawWidth = video.videoWidth;
      let drawHeight = video.videoHeight;
      let startX = 0;
      let startY = 0;

      if (videoRatio > targetRatio) {
        drawWidth = drawHeight * targetRatio;
        startX = (video.videoWidth - drawWidth) / 2;
      } else {
        drawHeight = drawWidth / targetRatio;
        startY = (video.videoHeight - drawHeight) / 2;
      }

      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = targetWidth;
      tempCanvas.height = targetHeight;
      const tempCtx: any = tempCanvas.getContext("2d");

      // Draw the original image first
      tempCtx.save();
      tempCtx.translate(tempCanvas.width, 0);
      tempCtx.scale(-1, 1);
      tempCtx.drawImage(video, startX, startY, drawWidth, drawHeight, 0, 0, targetWidth, targetHeight);
      tempCtx.restore();

      // Flip canvas for mirroring
      context.save();

      if (filter !== "none") {
        applyFilterToCanvas(tempCanvas, filter);
      }

      // Draw the processed image to the main canvas
      context.drawImage(tempCanvas, 0, 0);

      return canvas.toDataURL("image/png");
    }
  };

  return (
    <PhotoBoothScreenWrapper>
      <div className="photo-booth">
        {countdown !== null && <h2 className="countdown animate">{countdown}</h2>}

        <div className="photo-container">
          <div className="camera-container">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              disablePictureInPicture
              disableRemotePlayback
              className="video-feed"
              style={{
                filter: cssFilter,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <canvas ref={canvasRef} className="hidden" />
          </div>

          <div className="preview-side">
            {capturedImages.map((image: any, index: any) => (
              <img key={index} src={image} alt={`Captured ${index + 1}`} className="side-preview" />
            ))}
          </div>
        </div>

        {/* Countdown Selection */}
        <div className="countdown-options">
          <label>Select Countdown Time:</label>
          <select
            onChange={(e) => setCountdownTime(parseInt(e.target.value))}
            value={countdownTime}
            disabled={capturing}
          >
            <option value={5}>5s</option>
            <option value={10}>10s</option>
          </select>
        </div>

        <div className="controls">
          <button onClick={startCountdown} disabled={capturing}>
            {capturing ? "Capturing..." : "Start Capture :)"}
          </button>
        </div>

        <p className="filter-prompt">Choose a filter before starting capture!</p>

        <div className="filters">
          <button onClick={() => setFilter("none")} disabled={capturing}>
            Normal
          </button>

          <button onClick={() => setFilter("smooth-skin")} disabled={capturing}>
            Smooth skin
          </button>
        </div>
      </div>
    </PhotoBoothScreenWrapper>
  );

};

export default PhotoBoothScreen;
