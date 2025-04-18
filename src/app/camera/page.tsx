import PhotoBoothScreen from "@/screens/photo-booth";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "CameraPage",
  openGraph: {
    type: "website",
  },
};

export default async function CameraPage() {
  return (
    <div>
      <Suspense>
        <PhotoBoothScreen />
      </Suspense>
    </div>
  );
}
