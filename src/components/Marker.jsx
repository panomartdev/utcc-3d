/* eslint-disable react/prop-types */
import { Html } from '@react-three/drei';
import { useContext } from 'react';
import { BuildingContext } from '../context/buildingContext';

const Marker = (props) => {
  const { position, label, cameraPosition, orbitAngle} = props  
  const { setOrbitPosition, setCameraPosition, setOrbitAngle, setSelectedModel } = useContext(BuildingContext);

  // ฟังก์ชั่น => กดคลิ๊กที่ตึกแล้วกล้องจะเปลี่ยนจุด Orbit ไปที่ ตึกที่ถูกเลือก 
  const handleBuildingFocus = () => {
      const newOrbitPosition = position;   
      const newCameraPosition = cameraPosition; 
      const newOrbitAngle = orbitAngle; 

      setOrbitPosition(newOrbitPosition);
      setCameraPosition(newCameraPosition);
      setOrbitAngle(newOrbitAngle);
      setSelectedModel(label)
  };

  return (
    <Html position={[position[0], position[1]+ 0.5, position[2]]} zIndexRange={[0, 0]} >
        <div onClick={handleBuildingFocus} className='flex items-center justify-center cursor-pointer w-auto h-auto z-0'>
            {/* Hotspot Marker */}
            <div className="bg-transparent border border-white p-1.5 rounded-full shadow-lg flex items-center justify-center">
               <div className="bg-white p-0.5 rounded-full shadow-lg"/>
            </div>
            {/* Marker Label */}
            <span className='text-white text-[14px] whitespace-nowrap ml-1'>{label}</span>
        </div>
    </Html>
  );
};

export default Marker;