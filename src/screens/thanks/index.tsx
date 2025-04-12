"use client";

import { useRouter } from "next/navigation";
import { ThanksWrapper } from "./styled";
import logo from '../../../public/img/thankyou.svg';
import Image from 'next/image';

const ThanksScreen = () => {
  const router = useRouter();

  return (
    <ThanksWrapper>
      <div className="welcome-container">
         <Image
            priority
            src={logo}
            width={280}
            alt="Thank you for your message"
            className="Posensen-logo -mb-14 -mt-14"
          />
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
