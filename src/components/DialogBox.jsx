import { useContext, useEffect, useState } from 'react';
import { BuildingContext } from '../context/buildingContext';
import { MdClose } from "react-icons/md";

const DialogBox = () => {
  const {selectedModel, setSelectedModel, setOrbitAngle, setCameraPosition, setOrbitPosition} = useContext(BuildingContext);  
  const [modelInfo, setModelInfo] = useState(null);

  // Fetch data from JSON file
  useEffect(() => {
    if(selectedModel){
        fetch('/src/data/info.json')
          .then(response => response.json())
          .then(data => {
             const selectedInfo = data.info.find(item => item.label === selectedModel)
             setModelInfo(selectedInfo)  
          })
    }
  }, [selectedModel]);

  const handleClose = () => {
     setSelectedModel(null);
     setModelInfo(null);
     setOrbitPosition([0, 0, 0]);
     setCameraPosition([0, 1.5, 5]);
     setOrbitAngle(0);
  }

  return (
 
      <div className={`${modelInfo ? "right-0" : "right-[-200%]"} w-[30rem] min-h-full fixed bg-white py-5 px-6 shadow-lg z-10 rounded transition-all duration-1000 ease-in-out`}>
        
            {modelInfo && (
              <>
                  <div className='flex justify-between items-center'>
                      <h2 className="text-4xl font-bold mb-2">{modelInfo.label}</h2>
                      <button 
                       onClick={()=> handleClose()} 
                       className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
                          <MdClose className="text-[28px] text-center text-white"/>
                      </button>
                  </div>
            
                  <p className="mb-4">{modelInfo.description}</p>
              </>
            )}
           
      </div>
    
  );
};

export default DialogBox;