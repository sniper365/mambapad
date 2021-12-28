import React, { Suspense } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";

const Hero = React.lazy(() => import("../components/Home/Hero"));
const MainFeatures = React.lazy(() =>
  import("../components/Home/MainFeatures")
);
const TierSystem = React.lazy(() => import("../components/Home/TierSystem"));
const RoadMap = React.lazy(() => import("../components/Home/RoadMap"));
const Partners = React.lazy(() => import("../components/Home/Partners"));
const Team = React.lazy(() => import("../components/Home/Team"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Background />
        <Hero />
        <MainFeatures />
        <TierSystem />
        <RoadMap />
        <Partners />
        <Team />
        <Footer />
      </Suspense>
    </>
  );
}
