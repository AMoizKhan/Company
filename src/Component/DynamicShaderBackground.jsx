"use client";

import dynamic from "next/dynamic";

const AnoAI = dynamic(
  () => import("@/Component/animated-shader-background"),
  { ssr: false, loading: () => <div className="fixed inset-0 -z-10 bg-black" /> }
);

export default function DynamicShaderBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <AnoAI />
    </div>
  );
}
