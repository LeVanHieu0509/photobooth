"use client";

import { useRouter } from "next/navigation";
import { HomepageWrapper } from "./styled";
import { useEffect, useState } from "react";
import SplashScreen from "../splash";
import Image from 'next/image';
import logo from '../../../public/img/bruh.svg';

interface HomepageProps {}

const HomepageScreen = ({}: HomepageProps) => {
  const router = useRouter();
  const [visible, setVisible] = useState(true); // Điều khiển việc hiển thị SplashScreen
  
    const HandleRenderSplash = () => {
      return  visible ? <SplashScreen  visible={visible}/> : null;
    };
  
    const RemoveSplash = () => {
      setTimeout(() => {
        setVisible(false); // Đặt lại visible thành false sau 2 giây
      }, 2000); // Thời gian ẩn SplashScreen
    };
  
    useEffect(() => {
      RemoveSplash(); // Gọi hàm để ẩn splash screen khi component mount
    }, []);

  return (
    <HomepageWrapper>
      <div className=" background-gradient h-screen flex  flex-col justify-center items-center text-center ">
        {HandleRenderSplash()}
        <div className="home-container ">
          
          <Image
            priority
            src={logo}
            width={280}
            alt="Follow us on Twitter"
            className="Posensen-logo -mb-14 -mt-14"
          />
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Pose-n-Sen photobooth! This is your personal photobooth at home.
          </p>
          <div style={{ height: "20px" }}></div>

          <img
            src={`${process.env.basePath}/img/khungHomepage.png`}
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
