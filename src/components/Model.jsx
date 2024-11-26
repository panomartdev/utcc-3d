/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useGLTF } from "@react-three/drei"
import Marker from "./Marker"

const Model = (props) => {
    const { modelScene, scale, position, rotation, label, cameraPosition, orbitAngle} = props //รับค่า Props ต่างๆ 
    const {scene} = useGLTF(modelScene)
    return (
      <>
          <mesh scale={scale} position={position} rotation={rotation}>
              <primitive object={scene} />
          </mesh>

          {/* ถ้าค่า Label ไม่เป็นค่าว่าง => Model Constructor จะพ่วง Component: Marker เข้ามาด้วยซึ่งเป็นตัวสร้าง Marker สีขาวๆ 
              สำหรับการกดคลิ๊กเพื่อเปิด DialogBox ข้อมูลของตึกที่ถูกเลือก */}
          { 
            label && 
              <Marker 
                position={position} 
                label={label} 
                cameraPosition={cameraPosition}
                orbitAngle={orbitAngle}
              />
          }
          
      </>
    );
}

export default Model
