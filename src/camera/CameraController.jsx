/* eslint-disable react/prop-types */
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

const CameraController = ({ orbitPosition,cameraPosition, orbitAngle = 0 }) => {
    const { camera } = useThree();
    const [isAnimating, setIsAnimating] = useState(false);
    const targetPosition = useRef(new THREE.Vector3(...cameraPosition));
    const targetLookAt = useRef(new THREE.Vector3(...orbitPosition));
    const startPosition = useRef(new THREE.Vector3());
    const startLookAt = useRef(new THREE.Vector3());
    const animationProgress = useRef(0);

    useEffect(() => {
        startPosition.current.copy(camera.position);
        startLookAt.current.copy(camera.position).add(camera.getWorldDirection(new THREE.Vector3()));
        
        // Calculate the new camera position based on the orbit angle
        const distance = new THREE.Vector3(...cameraPosition).distanceTo(new THREE.Vector3(...orbitPosition));
        const angleRad = THREE.MathUtils.degToRad(orbitAngle);
        const newX = orbitPosition[0] + distance * Math.sin(angleRad);
        const newZ = orbitPosition[2] + distance * Math.cos(angleRad);
        
        targetPosition.current.set(newX, cameraPosition[1], newZ);
        targetLookAt.current.set(...orbitPosition);
        
        animationProgress.current = 0;
        setIsAnimating(true);
    }, [cameraPosition, orbitPosition, orbitAngle]);

    useFrame(() => {
        if (isAnimating) {
            animationProgress.current += 0.006;
            if (animationProgress.current > 1) {
                animationProgress.current = 1;
                setIsAnimating(false);
            }
            //Keyframe สำหรับเปลี่ยนตำแหน่งของกล้อง หรือ CameraPosition
            camera.position.lerpVectors(startPosition.current, targetPosition.current, animationProgress.current); 
            
            //Keyframe สำหรับการเปลี่ยนจุดที่กล้องโฟกัส หรือ OrbitPosition
            const currentLookAt = new THREE.Vector3();
            currentLookAt.lerpVectors(startLookAt.current, targetLookAt.current, animationProgress.current);
            camera.lookAt(currentLookAt);
            
            camera.updateProjectionMatrix();
        }
    });
  
    return null;
}

export default CameraController