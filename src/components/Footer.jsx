import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="absolute z-10 bottom-0 w-full">
        <div className="flex justify-between">
            <p>UTCC 3D Diagram</p>
            <nav className="flex gap-2">
                <a href="https://www.google.co.th" target="_blank" className="text-green-500"><FaFacebookF/></a>
                <div>Icon1</div>
                <div>Icon1</div>
                <div>Icon1</div>
                <div>Icon1</div>
            </nav>
        </div>
    </footer>
  )
}

export default Footer