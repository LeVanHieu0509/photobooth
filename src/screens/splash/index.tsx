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
          <h1>P</h1>
          <h1>o</h1>
          <h1>s</h1>
          <h1>e</h1>
          <h1>-</h1>
          <h1>n</h1>
          <h1>-</h1>
          <h1>S</h1>
          <h1>e</h1>
          <h1>n</h1>
        </div>
        <div className={`subtitle ${poppins.className} `}>
         Where every pose meets a petal.
        </div>

      </div>
    </div>
  );
};

export default SplashScreen;
