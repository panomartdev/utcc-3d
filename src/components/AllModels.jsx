/* eslint-disable no-unused-vars */
import Field from '../models/Field';
import birdModel from "../assets/3d/bird.glb";
import houseModel from "../assets/3d/bretonian_house.glb"
import Model from './Model';

import mainGround from "../assets/3d/maingroundroad_update.glb"
import b1 from "../assets/3dmodels/Building1st.glb";
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
          position={[0, -1, 0]}
      />

      <Model
        label="ตึก 1"
        modelScene={b1}
        scale={1}
        position={[-5, 0, -2]}
        cameraPosition={[-5, 1.5, -1]}
        orbitAngle={250}/>

  

      {/* Mainscene */}
      <Model
        label=""
        modelScene={mainscene}
        scale={1}
        rotation={[0, 0, 0]}
        position={[0.25, -1, -0.6]}
        cameraPosition={[1.5, 3, 0.5]}
        orbitAngle={75}
      />
      
    </>
  )
}

export default AllModels