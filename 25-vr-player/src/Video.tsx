import { useState } from "react";
import { CameraControls } from "@react-three/drei";
import { BackSide } from "three";

interface VideoProps {
  src: string;
  size?: number;
}

export function Video({ src, size = 500 }: VideoProps) {
  const [video] = useState<HTMLVideoElement>(() => {
    const video = document.createElement("video");
    video.src = src;
    video.crossOrigin = "Anonymous";
    video.loop = true;
    video.currentTime = 2000;

    return video;
  });

  return (
    <mesh scale={[-size, size, size]} onClick={() => video.play()}>
      <sphereGeometry />

      <CameraControls maxDistance={240} />

      <meshBasicMaterial side={BackSide}>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}
