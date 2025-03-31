"use client";

import { useRouter } from "next/navigation";
import { HomepageWrapper } from "./styled";

interface HomepageProps {}

const HomepageScreen = ({}: HomepageProps) => {
  const router = useRouter();

  return (
    <HomepageWrapper>
      <div className=" background-gradient h-screen flex  flex-col justify-center items-center text-center">
        <div className="home-container">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Lotus Reverie</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Lotus Reverie photobooth! This is your personal photobooth at home.
          </p>
          <div style={{ height: "20px" }}></div>

          <img
            src={`${process.env.basePath}/img/photobooth-strip.png`}
            alt="photobooth strip"
            className="photobooth-strip"
          />

          <button onClick={() => router.push("/welcome")} className="transition">
            START
          </button>

          
          <div className="footer"></div>
          
          
        </div>
      </div>
    </HomepageWrapper>
  );
};

export default HomepageScreen;
