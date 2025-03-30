import ThanksScreen from "@/screens/thanks";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "Thanks",
  openGraph: {
    type: "website",
  },
};

export default async function WelcomePage() {
  return (
    <div className="pt-50">
      <Suspense>
        <ThanksScreen />
      </Suspense>
    </div>
  );
}
