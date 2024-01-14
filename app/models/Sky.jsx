import React from "react";
import { useGLTF } from "@react-three/drei";
import skyModel from "../assets/sky.glb"; // Assuming it's a GLTF model

const Sky = () => {
  const { scene } = useGLTF(skyModel); // Destructure the 'scene' from useGLTF

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};
useGLTF.preload(skyModel);
export default Sky; // Ensure you export the correct component name 'Sky'
