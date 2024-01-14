"use client";
import React, { Suspense, useState } from "react";
import ChatBot from "./components/ChatBot"; // Update the path if needed
import Island from "./models/Island";
import { Canvas } from "@react-three/fiber";
// import { Loader } from "three";
import Sky from "./models/Sky";
// import { Plane } from "@react-three/drei";
// import Bird from "./models/Bird";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0.9, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing : 'cursor-grab'} "
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="000000"
            intensity={1}
          />
          {/* <Bird /> */}
          <Sky />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>

      <ChatBot />
    </section>
  );
};

export default Home;
