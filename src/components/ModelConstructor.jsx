/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useGLTF } from "@react-three/drei"
import Marker from "./Marker"

const ModelConstructor = (props) => {
    const { modelScene, scale, position, rotation, label, cameraPosition, orbitAngle } = props //รับค่า Props ต่างๆ 
    const {scene} = useGLTF(modelScene)
    return (
      <>
          <mesh scale={scale} position={position} rotation={rotation}>
              <primitive object={scene} />
          </mesh>

          {/* สำหรับการส่ง Props จะเป็นแบบนี้ จะขึ้นต้นด้วย 
              <ชื่อตัวแปร> = {value ที่ต้องการส่ง} 
              เช่น position<ชื่อตัวแปร> = < ค่า value ดึงค่าจาก position ด้านบน > */}
              
          <Marker 
            position={position} 
            label={label} 
            cameraPosition={cameraPosition}
            orbitAngle={orbitAngle}
          />
      </>
    );
}

export default ModelConstructor
