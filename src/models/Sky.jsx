/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

import skyNight from '../assets/Skyboxs/skybox_night.glb';
import skyDay from "../assets/Skyboxs/skyday_day.glb";
import { useContext } from 'react';
import { BuildingContext } from '../context/buildingContext';

const Sky = () => {
    const {lightTheme } = useContext(BuildingContext)
    const sky = useGLTF(lightTheme ? skyDay : skyNight);
 
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}
export default Sky
