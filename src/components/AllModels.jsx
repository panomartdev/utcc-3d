/* eslint-disable no-unused-vars */
import Field from '../models/Field';
import birdModel from "../assets/3d/bird.glb";
import houseModel from "../assets/3d/bretonian_house.glb"
import Model from './Model';

import mainGround from "../assets/3d/scaledgroundroad.glb"
import b1 from "../assets/3d/building1.glb";
import b7 from "../assets/3d/building7.glb"
import b8 from "../assets/3d/building8.glb";
import b9 from "../assets/3d/building9.glb";
import b22 from "../assets/3d/building22.glb"
import b23 from "../assets/3d/building23.glb";
import mainscene from "../assets/3d/Mainscenev2.glb"

const AllModels = () => {

  //================ All Models Scaling, Positioning and Responsive Adjustment ========================

  const adjustFieldForScreen = () =>{
    let fieldScale = null; 
    let fieldPosition = [0, -6.5, -43];
    let fieldCamera = [0, 1.5, 4];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
       fieldScale = [0.9, 0.9, 0.9];
       fieldPosition = [0, -6.5, -43];
    } else {
       fieldScale = [0.1, 0.1, 0.1];
       fieldPosition = [0, 0, 0];
    }

    return [fieldScale, fieldPosition, rotation, fieldCamera];
}
const [fieldScale, fieldPosition, fieldRotation, fieldCamera] = adjustFieldForScreen();


  return (
    <>
      <Model
          modelScene={mainGround}
          position={[0, 0, 0]}
      />

      {/* Bird */}
      <Model
        label="Bird" 
        modelScene={birdModel} 
        scale={0.003} 
        rotation={[0, 0, 0]}
        position={[3, 1.5, -2]}
        cameraPosition={[3, 3, 0]}
        orbitAngle={295}
      />

      {/* Wooden House */}  
      <Model
        label="Wooden House"
        modelScene={houseModel}
        scale={0.5}
        rotation={[0, 2.75, 0]}
        position={[-1.5, 0.125, 2.5]}
        cameraPosition={[-1.5, 1.5, 0.5]}
        orbitAngle={105}
      />

      <Model
        label="ตึก 1"
        modelScene={b1}
        scale={0.1}
        position={[-5, 0, -2]}
        cameraPosition={[-5, 1.5, -1]}
        orbitAngle={250}/>

      {/* Building 7th */}
      <Model
        label="ตึก 7"
        modelScene={b7}
        scale={0.0025}
        rotation={[0, 0, 0]}
        position={[-3, 0, 0]}
        cameraPosition={[-1.5, 1.5, 1.5]}
        orbitAngle={45}
      />

      {/* Building 8th */}
      <Model
        label="ตึก 8"
        modelScene={b8}
        scale={0.1}
        rotation={[0, 0, 0]}
        position={[-3, 0.5, -2]}
        cameraPosition={[-3, 2, -0.5]}
        orbitAngle={240}
      />
      
      {/* Building 9th */}
      <Model
        label="ตึก 9"
        modelScene={b9}
        scale={0.0025}
        rotation={[0, 0, 0]}
        position={[0, 0.2, -3]}
        cameraPosition={[0, 2.5, -1.5]}
        orbitAngle={160}
      />

      {/* Building 23rd */}
      <Model
        label="ตึก 23"
        modelScene={b23}
        scale={0.1}
        rotation={[0, 0, 0]}
        position={[3, 1.5, 0]}
        cameraPosition={[1.5, 3, 0.5]}
        orbitAngle={75}
      />

      {/* Building 23rd */}

      {/* Mainscene */}
     
      
    </>
  )
}

export default AllModels