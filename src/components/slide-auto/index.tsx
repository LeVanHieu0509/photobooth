import { useCallback, useEffect, useRef, useState } from "react";
import CardBlogItem from "./card-blog-item";
import { Dot, PaginationDot, SliderContent, SliderItem, SliderWrapper } from "./styled";
import useWindowResize from "@/hooks/use-window-resize";
import { useRouter } from "next/navigation";

export interface ListData {
  title: string;
  image: string;
  date: string;
  href: string;
}

const SliderAuto = ({ listData }: { listData: ListData[] }) => {
  const newListData = listData.concat(listData).concat(listData[0]);
  const sliderRef = useRef<any>();
  const ref = useRef<any>();
  const router = useRouter();
  const size: any = useWindowResize();

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [positionTouch, setPositionTouch] = useState<any>();

  const length = newListData?.length - 2;

  const handlePre = useCallback(() => {
    setTransition(true);

    if (currentIndex === 1) {
      setCurrentIndex(currentIndex - 1);

      setTimeout(() => {
        setTransition(false);

        setCurrentIndex(length - 2);
      }, 350);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex, length]);

  const handleNext = useCallback(() => {
    setTransition(true);
    if (currentIndex === length - 2) {
      setCurrentIndex(length - 1);

      setTimeout(() => {
        setCurrentIndex(1);
        setTransition(false);
      }, 350);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const handleClickDot = (index: any) => {
    setCurrentIndex(index);

    if (index === length) {
      setCurrentIndex(length);

      setTimeout(() => {
        setCurrentIndex(0);
        setTransition(false);
      }, 305);
    }
  };

  const handleTouchStart = useCallback((e: any) => {
    setPositionTouch(e.touches[0].pageX);
  }, []);

  const handleTouchEnd = useCallback(
    (e: any) => {
      if (!e.cancelable || e.changedTouches[0].pageX === positionTouch) {
        return;
      }
      if (e.changedTouches[0].pageX < positionTouch) {
        handleNext();
      } else {
        handlePre();
      }
    },
    [positionTouch]
  );

  useEffect(() => {
    if (listData.length >= 2) {
      const timer = setTimeout(() => handleNext(), 5000);
      return () => clearTimeout(timer);
    }
  }, [handleNext]);

  return (
    <SliderWrapper>
      <SliderContent
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: size.width >= 786 ? `translateX(-${currentIndex * 33.3}%)` : `translateX(-${currentIndex * 100}%)`,
          transition: transition ? "all 0.4s ease-in-out" : "none",
        }}
        ref={sliderRef}
      >
        {newListData?.map((item, i) => (
          <SliderItem key={i} ref={ref} onClick={() => router.push(item.href)}>
            <CardBlogItem item={item} key={i} />
          </SliderItem>
        ))}
      </SliderContent>

      {listData.length >= 2 && (
        <PaginationDot>
          {newListData
            .slice(0, 3)
            ?.map((item, index) => <Dot key={index} className={index + 1 === currentIndex ? "active" : null} />)}
        </PaginationDot>
      )}
    </SliderWrapper>
  );
};

export default SliderAuto;
