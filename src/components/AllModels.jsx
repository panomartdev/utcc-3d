/* eslint-disable no-unused-vars */
import Field from '../models/Field';
import birdModel from "../assets/3d/bird.glb";
import houseModel from "../assets/3d/bretonian_house.glb"
import Model from './Model';

import mainGround from "../assets/3d/maingroundroad_update.glb"
import b1 from "../assets/3dmodels/Building1st.glb";
import b3 from "../assets/3dmodels/Building3rd.glb";
import b5 from "../assets/3dmodels/Building5th.glb";
import b7 from "../assets/3dmodels/Building7th.glb";
import b8 from "../assets/3dmodels/Building8th.glb";
import b9 from "../assets/3dmodels/Building9th.glb";
import b10 from "../assets/3dmodels/Building10th.glb";
import b14 from "../assets/3dmodels/Building14th.glb";
import b15 from "../assets/3dmodels/Building15th.glb";
import b16 from "../assets/3dmodels/Building16th.glb";
import b17 from "../assets/3dmodels/Building17th.glb";
import b19 from "../assets/3dmodels/Building19th.glb";
import b20 from "../assets/3dmodels/Building20th.glb";
import b21 from "../assets/3dmodels/Building21st.glb";
import b22 from "../assets/3dmodels/Building22nd.glb";
import b23 from "../assets/3dmodels/Building23rd.glb";
import b24 from "../assets/3dmodels/Building24th.glb";
import b25 from "../assets/3dmodels/Building25th.glb";

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
      {/* Building 1st */}
      <Model
        label="ตึก 1"
        modelScene={b1}
        scale={1}
        position={[-5, 0.5, 6]}
        cameraPosition={[-5, 4, 10]}
        orbitAngle={90}/>

      {/* Building 3rd */}
      <Model
        label="ตึก 3"
        modelScene={b3}
        scale={1}
        position={[4, 0.5, 6]}
        cameraPosition={[4, 4, 10]}
        orbitAngle={270}/>

      {/* Building 5th */}
      <Model
        label="ตึก 5"
        modelScene={b5}
        scale={1}
        position={[0, 0.5, -13]}
        cameraPosition={[0, 7, -9]}
        orbitAngle={165}/>

      {/* Building 7th */}
      <Model
        label="ตึก 7"
        modelScene={b7}
        scale={1}
        position={[10.25, 0.5, 2.8]}
        cameraPosition={[10.25, 5, 9]}
        orbitAngle={330}/>

      {/* Building 8th */}
      <Model
        label="ตึก 8"
        modelScene={b8}
        scale={1}
        position={[-7.9, 0.5, -6]}
        cameraPosition={[-7.9, 4, -2]}
        orbitAngle={330}/>

      {/* Building 9th */}
      <Model
        label="ตึก 9"
        modelScene={b9}
        scale={1}
        position={[6.5, 0.5, 0.25]}
        cameraPosition={[6.5, 4, 5]}
        orbitAngle={230}/>  

      {/* Building 10th */}
      <Model
        label="ตึก 10"
        modelScene={b10}
        scale={1}
        position={[0, 0.5, 10.2]}
        cameraPosition={[0, 4, 5]}
        orbitAngle={179}/>

      {/* Building 14th */}
      <Model
        label="ตึก 14"
        modelScene={b14}
        scale={1}
        position={[-9, 0.5, 13]}
        cameraPosition={[-5, 5, 7]}
        orbitAngle={90}/>

      {/* Building 15th */}
      <Model
        label="ตึก 15"
        modelScene={b15}
        scale={1}
        position={[-5, 0.5, -0.5]}
        cameraPosition={[-5, 5, 6]}
        orbitAngle={90}/>

      {/* Building 16th */}
      <Model
        label="ตึก 16"
        modelScene={b16}
        scale={1}
        position={[0, 0.5, -18]}
        cameraPosition={[0, 5, -12.5]}
        orbitAngle={50}/>

      {/* Building 17th */}
      <Model
        label="ตึก 17"
        modelScene={b17}
        scale={1}
        position={[4.25, 0.5, -16.5]}
        cameraPosition={[4.25, 5, -15]}
        orbitAngle={60}/>  

      {/* Building 19th */}
      <Model
        label="ตึก 19"
        modelScene={b19}
        scale={1}
        position={[14, 0.5, 8]}
        cameraPosition={[14, 5, 7]}
        orbitAngle={200}/>

      {/* Building 20th */}
      <Model
        label="ตึก 20"
        modelScene={b20}
        scale={1}
        position={[-2.5, 0.5, 18.5]}
        cameraPosition={[-2.5, 7, 18]}
        orbitAngle={160}/>

      {/* Building 21st */}
      <Model
        label="ตึก 21"
        modelScene={b21}
        scale={1}
        position={[7, 0.5, -7.5]}
        cameraPosition={[7, 5, -2]}
        orbitAngle={310}/>

      {/* Building 22nd */}
      <Model
        label="ตึก 22"
        modelScene={b22}
        scale={1}
        position={[11, 0.5, -4.7]}
        cameraPosition={[11, 7, -2]}
        orbitAngle={0}/>

      {/* Building 23rd */}
      <Model
        label="ตึก 23"
        modelScene={b23}
        scale={1}
        position={[11, 0.5, 0.25]}
        cameraPosition={[11, 7, 0]}
        orbitAngle={210}/>

      {/* Building 24th */}
      <Model
        label="ตึก 24"
        modelScene={b24}
        scale={1}
        position={[0, 0.5, -7.5]}
        cameraPosition={[0, 12, -2]}
        orbitAngle={0}/>

      {/* Building 25th */}
      <Model
        label="ตึก 25"
        modelScene={b25}
        scale={1}
        position={[-4.5, 0.5, -6]}
        cameraPosition={[-4.5, 5, -2]}
        orbitAngle={305}/>                                                 


  

      {/* Mainscene */}
      {/* <Model
        label=""
        modelScene={mainscene}
        scale={1}
        rotation={[0, 0, 0]}
        position={[0, 1, 0]}
        cameraPosition={[1.5, 3, 0.5]}
        orbitAngle={75}
      /> */}
      
    </>
  )
}

export default AllModels