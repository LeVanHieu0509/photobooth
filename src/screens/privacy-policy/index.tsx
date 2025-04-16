"use client";

import { Container } from "@/styles";
import { PrivacyPolicyScreenWrapper } from "./styled";


const PrivacyPolicyScreen = () => {
  return (
    <PrivacyPolicyScreenWrapper>
      <div className="background-gradient h-screen flex flex-col justify-center items-center text-center">
        <div className="privacy-container">
          <Container>
            <h1 className={`text-4xl font-bold mb-4 privacy-title }`}>Privacy Policy</h1>
            <p className="text-lg text-gray-700 mb-4">
              At Pose-n-Sen, your privacy is a top priority. We do not track, collect, or store any personal data. All
              photos taken are processed locally on your device and are not uploaded or saved to any external server.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We respect your privacy and are committed to protecting it. No cookies or trackers are used on this site.
            </p>
          </Container>
        </div>
      </div>
    </PrivacyPolicyScreenWrapper>
  );
};

export default PrivacyPolicyScreen;
