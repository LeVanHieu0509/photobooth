"use client";

import React from "react";
import { Carousel } from "@material-tailwind/react";
import { CarouselWrapper } from "./styled";
import useWindowResize from "@/hooks/use-window-resize";

interface CarouselProps {
  children: any;
  height?: number;
  className?: string;
}

const CarouselCustom = ({ children, height = 350, className = "" }: CarouselProps) => {
  const size: any = useWindowResize();

  return (
    <CarouselWrapper>
      <Carousel
        autoplayDelay={7000}
        loop
        autoplay
        style={{ height: size.width >= 786 ? height : 300, objectFit: "cover" }}
        className={className}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className=" absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {children}
      </Carousel>
    </CarouselWrapper>
  );
};

export default CarouselCustom;
