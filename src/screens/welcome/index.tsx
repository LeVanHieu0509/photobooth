"use client";

import { useRouter } from "next/navigation";
import { WelcomeWrapper } from "./styled";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <WelcomeWrapper>
      <div className="welcome-container">
        <h1>Welcome!</h1>
        <p>
          You have <strong>5 seconds</strong> for each shot – no retakes! <br />
          This photobooth captures <strong>4 pictures</strong> in a row, so strike your best pose and have fun!
        </p>
        <p>
          After the session, <span style={{ color: "pink" }}></span> download your digital copy and share the fun!
        </p>
        <button onClick={() => router.push("/photobooth")}>START</button>
      </div>
    </WelcomeWrapper>
  );
};

export default WelcomeScreen;
