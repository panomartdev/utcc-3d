/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei"
import houseScene from '../assets/3d/bretonian_house.glb';


const House = () => {
    const {scene} = useGLTF(houseScene);
  return (
    <mesh position={[3, -2, -5]} scale={[1, 1, 1]}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default House