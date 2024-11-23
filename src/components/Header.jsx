import { useContext, useState } from "react"
import { BuildingContext } from "../context/buildingContext"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { GoMute, GoUnmute } from "react-icons/go";
import MainLogoDay from "/img/logo_day.png"
import MainLogoNight from "/img/logo_night.png"

const Header = () => {

  const {lightTheme, setLightTheme} = useContext(BuildingContext);
  const [musicOn , setMusicOn] = useState(true);
  return (
    <header className="absolute top-0 z-10 w-full">
        <div className="flex justify-between w-[90%] items-center mx-auto py-2">    
            <img src={lightTheme ? MainLogoDay : MainLogoNight} className="h-[3rem] ml-4"/>
            <div className="flex items-center gap-3">
                <button className={`${lightTheme ? 'border-black':'border-white'} p-2 rounded-full border text-3xl`} onClick={()=>setLightTheme(!lightTheme)}>
                    {lightTheme ? <MdLightMode/>: <MdDarkMode/>}
                </button>
                <button className={`${lightTheme ? 'border-black':'border-white'} p-2 rounded-full border border-black  text-3xl`} onClick={()=>setMusicOn(!musicOn)}>
                    {musicOn ? <GoUnmute/> : <GoMute/>}
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header