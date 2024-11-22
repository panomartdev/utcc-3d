import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


const ErrorPage = () => {
  document.title = "Page not found"
  const navigate = useNavigate()

  useEffect(()=>{
      const redirectTime = setTimeout(() => {
        navigate('/')
      }, 3000);

      return () => clearTimeout(redirectTime);
  },[])
  
  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <img className="h-[60vh]" src="/img/404.png"/>
        <Link to='/' className="bg-[#bee7e8] p-3 rounded-xl border-2 border-[#36b2ff] hover:text-white hover:bg-[#3b4ee4] transition-all duration-300 ease-in-out">Back to Home</Link>
    </div>
  )
}

export default ErrorPage