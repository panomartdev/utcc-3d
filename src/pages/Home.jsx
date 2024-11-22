/* eslint-disable no-unused-vars */
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useState, useCallback, useContext, useEffect } from "react";
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
  }

  //============== Camera positions and Orbit Controling Functions ===========

//คำสั่งเรียกใช้ตัวแปรใน BuildingContext โดยต้องระบุตัวแปรจาก Context   

const {orbitPosition, setOrbitPosition} = useContext(BuildingContext); 
const {cameraPosition, setCameraPosition} = useContext(BuildingContext);
const {orbitAngle, setOrbitAngle} = useContext(BuildingContext)
const {selectedModel} = useContext(BuildingContext)     
  

  

  return (
    <section className="w-full h-screen relative">
      <DialogBox/>
      
       <Canvas className="w-full h-[80vh] bg-transparent">
          <Suspense fallback={<Loader/>}>
               
               <directionalLight/>
               <ambientLight/>
               <pointLight/>
               <spotLight/>
               <hemisphereLight/>
               
               <Sky/>

               {/* Orbit and Camera  */}

               {/* Component สำหรับการควบคุมมุมกล้อง (หมุนซ้าย-ขวา , หมุนขึ้น-ลง) */}
               <OrbitControls
                  enableZoom={introAnimateEnd && selectedModel == null} 
                  enablePan={false} 
                  enableRotate={introAnimateEnd && selectedModel == null}
                  maxDistance={30} 
                  minDistance={selectedModel == null ? 15 : 2}
                  autoRotate={introAnimateEnd && selectedModel == null}
                  autoRotateSpeed={-1}
                  minPolarAngle={Math.PI / 5} //จำกัดมุมกล้องด้านบนสุด
                  maxPolarAngle={Math.PI / 2.25} //จำกัดมุมกล้องด้านล่างสุด
                  target={orbitPosition}
               />

               {/* ควบคุมกล้องตอนโหลดหน้าใหม่ โดยเริ่มต้นจากระยะไกลๆ แล้วค่อยๆซูมเข้ามา */}
               <IntroAnimation startAnimation={handleIntroAnimate} endAnimatePosition={cameraPosition}/>

               {/* สำหรับการเปลี่ยนจุด Focus หรือ OrbitPosition */}
               <CameraController
                  orbitPosition={orbitPosition} 
                  cameraPosition={cameraPosition} 
                  orbitAngle={orbitAngle}
               /> 

               {/* All Models    */}
               <AllModels/>
               {/* <Loader/> */}
               
                
            
          </Suspense>
       </Canvas>
       <Footer/> 
    </section>
  )
}
