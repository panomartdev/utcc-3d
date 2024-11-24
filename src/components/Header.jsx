import { useContext, useState, useRef, useEffect } from "react"
import { BuildingContext } from "../context/buildingContext"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GoMute, GoUnmute } from "react-icons/go";
import bgMusic from "../assets/sound.mp3"
import MainLogoDay from "/img/logo_day.png"
import MainLogoNight from "/img/logo_night.png"

const Header = () => {

  const {lightTheme, setLightTheme} = useContext(BuildingContext);
  const [musicOn , setMusicOn] = useState(true);
  const audioRef = useRef(new Audio(bgMusic));
  const [interact, setInteract] = useState(false);

  // Set the first Interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      setInteract(true);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);
   

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
   
    };
  }, []);

  // Play music after interaction or when musicOn changes
  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    if (interact) {
      if (musicOn) {
        audioRef.current.play()
      } else {
        audioRef.current.pause();
      }
    }
   
  }, [interact, musicOn]);


  

  return (
    <header className="absolute top-0 z-10 w-full">
        <div className="flex justify-between w-[90%] items-center mx-auto py-3">    
            <img src={lightTheme ? MainLogoDay : MainLogoNight} className="h-[3rem] ml-4"/>
            <div className="flex items-center gap-3">
                <button className={`${lightTheme ? 'border-black':'border-white'} p-1.5 rounded-full border text-3xl`} onClick={()=>setLightTheme(!lightTheme)}>
                    {lightTheme ? <MdLightMode/>: <MdDarkMode/>}
                </button>
                <button className={`${lightTheme ? 'border-black':'border-white'} p-1.5 rounded-full border border-black  text-3xl`} onClick={()=>setMusicOn(!musicOn)}>
                    {musicOn ? <GoUnmute/> : <GoMute/>}
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header