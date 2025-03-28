import ContactBoothScreen from "@/screens/contact";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "contact",
  openGraph: {
    type: "website",
  },
};

export default async function WelcomePage() {
  return (
    <div className="pt-50">
      <Suspense>
        <ContactBoothScreen />
      </Suspense>
    </div>
  );
}
