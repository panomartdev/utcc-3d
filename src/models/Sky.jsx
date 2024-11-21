/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

import skyBackground from '../assets/3d/sky.glb';
import { useContext } from 'react';
import { BuildingContext } from '../context/buildingContext';

const Sky = () => {
    const {lightTheme } = useContext(BuildingContext)
    // const sky = useGLTF(lightTheme ? skyBackground : skyBackground);
    const sky = useGLTF(skyBackground);
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}
export default Sky
