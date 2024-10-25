/* eslint-disable no-unused-vars */
import Field from '../models/Field';
import birdModel from "../assets/3d/bird.glb";
import houseModel from "../assets/3d/bretonian_house.glb"
import Model from './Model';
import b8 from "../assets/3d/building7.glb"


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
      <Field 
          scale={0.1}
          position={[0, 0, 0]}
          rotation={fieldRotation}
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
        label="b8"
        modelScene={b8}
        scale={0.15}
        rotation={[0, 0, 0]}
        position={[-3, 0.3, 0]}
        cameraPosition={[-1.5, 1.5, 0.5]}
        orbitAngle={105}
      />
    </>
  )
}

export default AllModels