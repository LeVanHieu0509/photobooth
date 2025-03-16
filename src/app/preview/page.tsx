import PhotoPreviewScreen from "@/screens/photo-preview";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "PhotoPreviewScreen",
  openGraph: {
    type: "website",
  },
};

export default async function WelcomePage() {
  return (
    <div className="pt-50">
      <Suspense>
        <PhotoPreviewScreen />
      </Suspense>
    </div>
  );
}
