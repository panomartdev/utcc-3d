import { useContext, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BuildingContext } from '../context/buildingContext';
import { MdClose } from "react-icons/md";
import Slider from 'react-slick';


const DialogBox = () => {
  const {selectedModel, setSelectedModel, setOrbitAngle, setCameraPosition, setOrbitPosition , lightTheme} = useContext(BuildingContext);  
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
    arrows: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };

  return (
 
      <div className={`${modelInfo ? "right-0" : "right-[-200%]"} ${lightTheme ? 'bg-[#fffffff2]':'bg-[#2e2e2e]'} max-w-[25rem] min-h-[82.5vh] top-1/2 transform -translate-y-1/2 fixed py-5 px-6 shadow-lg flex flex-col z-10 rounded transition-all duration-500 ease-in-out rounded-l-3xl `}>
        
            {modelInfo && (
              <>
                  {/* Title and Close Button */}
                  <div className='flex justify-between items-start'>
                      <h2 className="text-4xl font-bold mb-2">{modelInfo.label}</h2>
                      <button 
                        onClick={()=> handleClose()} 
                        className="bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center">
                          <MdClose className="text-[20px] text-center text-white"/>
                      </button>
                  </div>

                  {/* Images / Images Slider */}
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
                  
                  {/* Building Information */}
                  <div className={`${lightTheme ? 'bg-[#bee7e8] custom-scrollbar-light' : 'bg-[#787d81] custom-scrollbar-dark'} h-[30vh] overflow-y-scroll px-6 py-4 rounded-lg`}>
                      <p>{modelInfo.description}</p>
                </div>

                 
              </>
            )}
           
      </div>
    
  );
};

export default DialogBox;