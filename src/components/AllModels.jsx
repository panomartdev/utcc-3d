/* eslint-disable no-unused-vars */
import Field from '../models/Field';
import birdModel from "@image/3d/bird.glb";
import houseModel from "@image/3d/bretonian_house.glb"
import Model from './Model';

import mainGround from "@image/3d/maingroundroad_update.glb"
import courtyard from "@image/3dmodels/Courtyard.glb";
import playground from "@image/3dmodels/Playground.glb";
import Dom from "@image/3dmodels/Dom.glb";
import Maesai from "@image/3dmodels/TreesB10.glb";
import Flag from "@image/3dmodels/Flag.glb";
import b1 from "@image/3dmodels/Building1st.glb";
import b3 from "@image/3dmodels/Building3rd.glb";
import b5 from "@image/3dmodels/Building5th.glb";
import b7 from "@image/3dmodels/Building7th.glb";
import b8 from "@image/3dmodels/Building8th.glb";
import b9 from "@image/3dmodels/Building9th.glb";
import b10 from "@image/3dmodels/Building10th.glb";
import b14 from "@image/3dmodels/Building14th.glb";
import b15 from "@image/3dmodels/Building15th.glb";
import b16 from "@image/3dmodels/Building16th.glb";
import b17 from "@image/3dmodels/Building17th.glb";
import b19 from "@image/3dmodels/Building19th.glb";
import b20 from "@image/3dmodels/Building20th.glb";
import b21 from "@image/3dmodels/Building21st.glb";
import b22 from "@image/3dmodels/Building22nd.glb";
import b23 from "@image/3dmodels/Building23rd.glb";
import b24 from "@image/3dmodels/Building24th.glb";
import b25 from "@image/3dmodels/Building25th.glb";

import mainscene from "@image/3d/Mainscenev2.glb"
import Tree from '../models/Tree';

const AllModels = () => {

  const treeModels = [
    {position:[-1.2, 0.5, 6.5], rotation:[0, 0, 0]},
    {position:[1.2, 0.5, 6.5], rotation:[0, 1.8, 0]},
    {position:[-0.8, 0.5, 5.5], rotation:[0, 2.70, 0]},
    {position:[0, 0.5, 6.5], rotation:[0, 1.8, 0]},
    {position:[1.5, 0.5, 5.5], rotation:[0, 2.8, 0]},
    {position:[-9.5, 0.5, 8], rotation:[0, 0, 0]},
    {position:[-9, 0.5, 9], rotation:[0, 3, 0]},
  ];

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
        cameraPosition={[0, 5, -6]}
        orbitAngle={50}/>

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
        position={[0, 0.5, -17.5]}
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
        position={[-2.5, 0.5, 17]}
        cameraPosition={[-2.5, 6, 16]}
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

      {/* ================Tree , Playground and others============= */}

      {/* Central Courtyard  */}
      <Model
        modelScene={courtyard}
        scale={1}
        position={[0, 0.5, 2.75]}/>

      {/* Playground  */}
      <Model
        modelScene={Dom}
        scale={0.5}
        position={[3.75, 0.5, -7.5]}
        />

      {/* Dom  */}
      <Model
        modelScene={playground}
        scale={1}
        position={[9, 0.5, 9]}
        />


      {/* Maesai Tree   */}
      <Model
        modelScene={Maesai}
        position={[7, 0.5, 13]}
        rotation={[0, 1.2, 0]}/>

      {/* Flag   */}
      <Model
        modelScene={Flag}
        scale={0.4}
        position={[-4.5, 0.5, 13.5]}/>

      {/* Tree */}
      {
        treeModels.map((item,index)=>(
          <Tree
            key={index}
            position={item.position}
            rotation={item.rotation}/> 
        ))
      }  

      
    </>
  )
}

export default AllModels