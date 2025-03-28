import PrivacyPolicyScreen from "@/screens/privacy-policy";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "HomePage",
  openGraph: {
    type: "website",
  },
};

export default async function WelcomePage() {
  return (
    <div className="pt-50">
      <Suspense>
        <PrivacyPolicyScreen />
      </Suspense>
    </div>
  );
}
