/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

import skyBackground from '../assets/3d/sky.glb';

const Sky = () => {
    const sky = useGLTF(skyBackground);
  return (
    <mesh>
        <primitive object={sky.scene}/>
    </mesh>
  )
}
export default Sky
