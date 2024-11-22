import { useContext, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BuildingContext } from '../context/buildingContext';
import { MdClose } from "react-icons/md";
import Slider from 'react-slick';


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
     setCameraPosition([0, 12, 25]);
     setOrbitAngle(0);
  }

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  return (
 
      <div className={`${modelInfo ? "right-0" : "right-[-200%]"} w-[30rem] min-h-[82.5vh] top-1/2 transform -translate-y-1/2 fixed bg-white py-5 px-6 shadow-lg flex flex-col z-10 rounded transition-all duration-1000 ease-in-out`}>
        
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

                  <div className='mt-2 mb-10'>
                    {
                      modelInfo.images.length < 2 ? (
                          <img src={modelInfo.images} alt='' className='slider-imgs'/>
                      ):(
                          <Slider {...settings}>
                              {modelInfo.images.map((image,index) => (
                                  <img key={index} src={image} alt='' className='slider-imgs'/>
                              ))}
                        </Slider>
                      )     
                    }
                  </div>     
                  
                  
                  <div className='bg-orange-500 flex-grow overflow-y-auto'>
                     <p className="">{modelInfo.description}</p>
                  </div>
                 
              </>
            )}
           
      </div>
    
  );
};

export default DialogBox;