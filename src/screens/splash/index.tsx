"use client";
import './index.css';
import { Black_Han_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';

const black_hans = Black_Han_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

interface SplashScreenProps {
  visible: boolean;
}

const SplashScreen = ({ visible }: SplashScreenProps) => {
  return (
    <div className={`splash-screen-wrapper ${visible ? "visible" : ""} absolute z-[2000] bg-white w-full top-0 left-0 h-screen text-wheat`}>
      <div className="splash-content flex flex-col justify-center items-center h-full">
        <div className={`flex gap-2 splashTitle h-[300px] ${black_hans.className} `}>
          <h1>L</h1>
          <h1>u</h1>
          <h1>m</h1>
          <h1>o</h1>
          <h1>r</h1>
          <h1>a</h1>
        </div>
        <div className={`subtitle ${poppins.className} `}>
          Where Moments Blossom
        </div>

      </div>
    </div>
  );
};

export default SplashScreen;
