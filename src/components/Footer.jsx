import { SiGoogleearth } from "react-icons/si";
import { ImEarth } from "react-icons/im";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="absolute z-10 bottom-0 w-full">
        <div className="flex justify-between px-4 py-4">
            <p className="flex mr-2 "><SiGoogleearth style={{ marginRight: '8px' }} /> UTCC 3D Diagram</p>
            <nav className="flex gap-2">
                <a href=" https://www.utcc.ac.th" target="_blank" className="text-[#3f62d6]"><ImEarth /></a> 
                <a href="https://www.facebook.com/dekutcc" target="_blank" className="text-[#32b1ff] "><BiLogoFacebookCircle /></a>
                <a href="https://www.tiktok.com/@dekutcc?_t=8rJx29fIcQz&_r=1" target="_blank" className="text-[#000000]"><AiFillTikTok /></a>
                <a href="https://www.instagram.com/dekutcc?igsh=MWZ3YXQ4ODQwMmh3aA==" target="_blank" className="text-[#b86298]"><FaSquareInstagram /></a>
                <a href="  https://x.com/dekutcc_" target="_blank" className="text-[#000000]"><FaSquareXTwitter /></a>
            </nav>
        </div>
    </footer>
  )
}

export default Footer