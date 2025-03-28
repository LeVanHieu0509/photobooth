import WelcomeScreen from "@/screens/welcome";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "Welcome",
  openGraph: {
    type: "website",
  },
};

export default async function WelcomePage() {
  return (
    <div className="pt-50">
      <Suspense>
        <WelcomeScreen />
      </Suspense>
    </div>
  );
}
