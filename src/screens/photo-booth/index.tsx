"use client";

import { useRef } from "react";
import { PhotoBoothScreenWrapper } from "./styled";

const PhotoBoothScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const openCamera = () => {
    if (typeof window === "undefined") return;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Lỗi khi mở camera:", error);
      });
  };

  return <PhotoBoothScreenWrapper>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full max-w-md bg-black"
      />
      <button
        className="text-black border p-2 mt-4 bg-white"
        onClick={openCamera}
      >
        Mở cam
      </button>
    </PhotoBoothScreenWrapper>
  ;
};

export default PhotoBoothScreen;
