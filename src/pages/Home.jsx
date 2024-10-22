/* eslint-disable no-unused-vars */
import Loader from "../components/Loader";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useState, useCallback, useContext, useEffect } from "react";
import Sky from "../models/Sky";
import { OrbitControls } from "@react-three/drei";
import IntroAnimation from "../camera/IntroAnimation";
import CameraController from "../camera/CameraController";
import { BuildingContext } from "../context/buildingContext";
import AllModels from "../components/AllModels";
import DialogBox from "../components/DialogBox";



export const Home = () => {
  document.title = "UTCC 3D View"
  
  //============== Animation on start ======================
  const [introAnimateEnd, setIntroAnimateEnd] = useState(false);
  const handleIntroAnimate = (e) =>{
   setIntroAnimateEnd(e);
  }

  //============== Camera positions and Orbit Controling Functions ===========

const {orbitPosition, setOrbitPosition} = useContext(BuildingContext);
const {cameraPosition, setCameraPosition} = useContext(BuildingContext);
const {orbitAngle, setOrbitAngle} = useContext(BuildingContext)
const {selectedModel} = useContext(BuildingContext)     
  

  

  return (
    <section className="w-full h-screen relative">
      <DialogBox/>
      
       <Canvas className="w-full h-screen bg-transparent">
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
                  maxDistance={10} 
                  minDistance={2}
                  minPolarAngle={Math.PI / 4.5} 
                  maxPolarAngle={Math.PI / 1.75}
                  target={orbitPosition}
               />

               {/* ควบคุมกล้องตอนโหลดหน้าใหม่ โดยเริ่มต้นจากระยะไกลๆ แล้วค่อยๆซูมเข้ามา */}
               <IntroAnimation startAnimation={handleIntroAnimate}/>

               {/* สำหรับการเปลี่ยนจุด Focus หรือ OrbitPosition */}
               <CameraController
                  orbitPosition={orbitPosition} 
                  cameraPosition={cameraPosition} 
                  orbitAngle={orbitAngle}
               /> 

               {/* All Models    */}
               <AllModels/>
               
                
            
          </Suspense>
       </Canvas>
    </section>
  )
}
