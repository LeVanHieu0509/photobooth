import PhotoBoothScreen from "@/screens/photo-booth";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "PhotoBoothScreen",
  openGraph: {
    type: "website",
  },
};

export default async function PhotoBootPage() {
  return (
    <div>
      <Suspense>
        <PhotoBoothScreen />
      </Suspense>
    </div>
  );
}
