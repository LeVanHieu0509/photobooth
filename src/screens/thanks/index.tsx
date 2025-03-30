"use client";

import { useRouter } from "next/navigation";
import { ThanksWrapper } from "./styled";

const ThanksScreen = () => {
  const router = useRouter();

  return (
    <ThanksWrapper>
      <div className="welcome-container">
        <h1>Thank You!</h1>
        <p>
          Thank you for reaching out! I'll get back to you! <br />
          as soon as possible.
        </p>

        <button onClick={() => router.push("/")}>Back</button>
      </div>
    </ThanksWrapper>
  );
};

export default ThanksScreen;
