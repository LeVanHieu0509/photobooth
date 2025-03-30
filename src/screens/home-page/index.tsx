"use client";

import { useRouter } from "next/navigation";
import { HomepageWrapper } from "./styled";

interface HomepageProps {}

const HomepageScreen = ({}: HomepageProps) => {
  const router = useRouter();

  return (
    <HomepageWrapper>
      <div className="background-gradient h-screen flex  flex-col justify-center items-center text-center">
        <div className="home-container">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">picapica</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Agnes' photobooth! This is your personal photobooth at home.
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
          <footer className="mt-8 text-sm text-gray-600">
            <p>
              made by{" "}
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: "pink", textDecoration: "none" }}>
                Kim
              </a>
            </p>
            {/* <p>© 2025 Kim.</p> */}
          </footer>
        </div>
      </div>
    </HomepageWrapper>
  );
};

export default HomepageScreen;
