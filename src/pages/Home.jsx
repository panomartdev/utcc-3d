/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useState, useCallback, useContext, useEffect, useRef} from "react";
import Sky from "../models/Sky";
import { OrbitControls } from "@react-three/drei";
import IntroAnimation from "../camera/IntroAnimation";
import CameraController from "../camera/CameraController";
import { BuildingContext } from "../context/buildingContext";
import AllModels from "@components/AllModels";
import DialogBox from "@components/DialogBox";

export const Home = () => {
  document.title = "UTCC 3D Diagram"
  
  //============== Animation on start ======================
  const [introAnimateEnd, setIntroAnimateEnd] = useState(false);
  const handleIntroAnimate = (e) =>{
   setIntroAnimateEnd(e);
  };

  //============== Camera positions and Orbit Controling Functions ===========

//คำสั่งเรียกใช้ตัวแปรใน BuildingContext โดยต้องระบุตัวแปรจาก Context   

  const {orbitPosition, setOrbitPosition} = useContext(BuildingContext); 
  const {cameraPosition, setCameraPosition} = useContext(BuildingContext);
  const {orbitAngle, setOrbitAngle} = useContext(BuildingContext);
  const {selectedModel} = useContext(BuildingContext);
  const {lightTheme, setLightTheme} = useContext(BuildingContext);

  return (
    <section className="w-full h-screen relative">
      <DialogBox/>
      
        <Canvas className="w-full h-screen bg-transparent">
            <Suspense fallback={<Loader/>}>
                <Loader load={true}/>

                <directionalLight 
                  position={[-5, 10, 0]} 
                  intensity={1} 
                  color="#efc070" 
                />
                <ambientLight 
                  position={[0, 10, 0]} 
                  intensity={lightTheme ? 0.8 : 0.1} 
                />
                <pointLight position={[-5, 10, 0]} intensity={1}/>
                <spotLight position={[0, 10, 0]} intensity={0.1} />
                <hemisphereLight position={[0, 10, 0]} intensity={0.1} />
                
                {/* โมเดล Skybox ที่เป็นพื้นหลังของงาน */}
                <Sky/>
                
                {/* Orbit and Camera  */}
                {/* Component สำหรับการควบคุมมุมกล้อง (หมุนซ้าย-ขวา , หมุนขึ้น-ลง) */}
                <OrbitControls
                  enableZoom={introAnimateEnd && selectedModel == null} //ซูมได้ ก็ต่อเมื่อ introAnimateEnd = true และ ไม่มีโมเดลตึกที่เลือก
                  enablePan={false} // ปิดการ Pan กล้อง
                  enableRotate={introAnimateEnd && selectedModel == null} //หมุนกล้องได้ ก็ต่อเมื่อ introAnimateEnd = true และ ไม่มีโมเดลตึกที่เลือก
                  maxDistance={30} //ระยะซูมที่ไกลที่สุด
                  minDistance={selectedModel == null ? 15 : 2} // ระยะซูมใกล้ที่สุด
                  autoRotate={introAnimateEnd && selectedModel == null} // หมุนกล้องอัติโนมัติเมื่อ introAnimateEnd เป็น true และ ไม่ได้เลือกตึกใดๆ
                  autoRotateSpeed={-1} //ความเร็วในการหมุนอัตโนมัติ
                  minPolarAngle={Math.PI / 5} //จำกัดมุมกล้องด้านบนสุด
                  maxPolarAngle={Math.PI / 2.25} //จำกัดมุมกล้องด้านล่างสุด
                  target={orbitPosition} //จุดที่โฟกัสของกล้อง
                />

          
                {/* ควบคุมกล้องตอนโหลดหน้าใหม่ โดยเริ่มต้นจากระยะไกลๆ แล้วค่อยๆซูมเข้ามา */}
                <IntroAnimation startAnimation={handleIntroAnimate} endAnimatePosition={cameraPosition}/>

                {/* Component สำหรับการเปลี่ยนจุด Focus ของกล้อง, ตำแหน่งของกล้อง และ องศารอบวัตถุเริ่มต้น */}
                <CameraController
                  orbitPosition={orbitPosition} 
                  cameraPosition={cameraPosition} 
                  orbitAngle={orbitAngle}
                /> 
                  
                {/* Component รวมโมเดลต่างๆ เช่น โมเดลอาคารต่างๆ , พื้น , สิ่งปลูกสร้างอื่นๆ    */}
                <AllModels/>
            
            </Suspense>
       </Canvas>
       <Footer/> 
    </section>
  )
}
