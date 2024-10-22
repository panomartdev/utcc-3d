/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from "@react-spring/three"

import fieldScene from '../assets/3d/island.glb';

const Field = (props) => {
  const fieldRef = useRef();
  const { nodes, materials } = useGLTF(fieldScene);

  return (
    <a.group ref={fieldRef} {...props} >
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}
export default Field;