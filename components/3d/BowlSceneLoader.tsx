"use client";

import dynamic from "next/dynamic";

const BowlScene = dynamic(() => import("./BowlScene"), {
  ssr: false,
  loading: () => null,
});

export default function BowlSceneLoader() {
  return <BowlScene />;
}
