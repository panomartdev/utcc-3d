import { Html, useProgress } from "@react-three/drei"
import introImg from "../assets/intro.svg"

const Loader = ({load}) => {
  const {progress} = useProgress();
  if (load) {
    setTimeout(() => {
      document.getElementById("suspenseComponent").classList.add("fade");
      setTimeout(() => {
        document.getElementById("suspenseComponent").remove();
      }, 1000);
    }, 500);
  } else {
    console.log("loading");
  }

  return (
    <Html>
      <div id="suspenseComponent" className='suspenseComponent grid justify-items-center content-center h-screen w-screen'>
        <img src={introImg} alt="UTCC 3D MAP" />
      </div>
    </Html> 
  )
}

export default Loader