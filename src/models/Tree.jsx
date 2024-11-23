/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import treeModels from "@image/3dmodels/TreesGreen.glb";
import { useGLTF } from '@react-three/drei';


const Tree = (props) => {

    const {scene} = useGLTF(treeModels);
    const {position, rotation} = props;

    return (
        <primitive
            object={scene.clone()} // Clone the model for each instance
            position={position}
            scale={1}
            rotation={rotation}
        />
    )
}

export default Tree