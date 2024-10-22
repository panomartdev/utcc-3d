/* eslint-disable react/no-unknown-property */
import birdScene from "../assets/3d/bird.glb"
import { useGLTF } from '@react-three/drei';

const Bird = (props) => {
    const {scene} = useGLTF(birdScene);
   
    return (
        <mesh {...props}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Bird