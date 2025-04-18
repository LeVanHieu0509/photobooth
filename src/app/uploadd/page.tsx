
import UploadScreen from "@/screens/uploadd";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description: "CameraPage",
  openGraph: {
    type: "website",
  },
};

export default async function UploadPage() {
  return (
    <div>
      <Suspense>
        <UploadScreen />
      </Suspense>
    </div>
  );
}
