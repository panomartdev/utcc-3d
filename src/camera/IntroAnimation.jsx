/* eslint-disable react/prop-types */
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import * as THREE from 'three'; 

const IntroAnimation = ({startAnimation, endAnimatePosition}) => {
    const { camera } = useThree();
    const [animationComplete, setAnimationComplete] = useState(false);
    const startPosition = useRef([0, 3, 10]); // Starting position (far away)
    const endPosition = endAnimatePosition; // End position (as specified in your Canvas)
  
    useFrame(() => {
      if (!animationComplete) {
        camera.position.lerp(new THREE.Vector3(...endPosition), 0.04);
        
        if (camera.position.distanceTo(new THREE.Vector3(...endPosition)) < 0.1) {
          setAnimationComplete(true);
          startAnimation(true);
        }
      }
    });
  
    useEffect(() => {
      camera.position.set(...startPosition.current);
    }, []);
  
    return null;
  };

  export default IntroAnimation;