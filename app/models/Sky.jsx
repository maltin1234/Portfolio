import React from "react";
import { useGLTF } from "@react-three/drei";
import skyModel from "../assets/sky.glb"; // Assuming it's a GLTF model
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyModel); // Destructure the 'scene' from useGLTF
  const skyRef = useRef();

  // check how long time it takes for the sky to spin
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};
useGLTF.preload(skyModel);
export default Sky; // Ensure you export the correct component name 'Sky'
