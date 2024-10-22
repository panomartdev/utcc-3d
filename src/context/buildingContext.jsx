/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const BuildingContext = createContext();

const BuildingFocusProvider = ({children}) => {
    const [orbitPosition , setOrbitPosition] = useState([0, 0, 0]);
    const [cameraPosition, setCameraPosition] = useState([0, 1.5, 5]);
    const [orbitAngle, setOrbitAngle] = useState(0);
    const [selectedModel, setSelectedModel] = useState(null);


    const contextValue = {
      orbitPosition, setOrbitPosition, 
      cameraPosition, setCameraPosition, 
      orbitAngle, setOrbitAngle,
      selectedModel, setSelectedModel
   }
    
  return <BuildingContext.Provider value={contextValue}>{children}</BuildingContext.Provider>
}

export default BuildingFocusProvider