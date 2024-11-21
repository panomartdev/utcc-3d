import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
        <div className='flex justify-center items-center'>
            <div className="flex flex-col justify-center items-center">
                {progress.toFixed(0)}% 
                <div className='w-20 h-20 border-8 border-gray-300 border-t-blue-400 border-b-blue-400 rounded-full animate-spin'/>
            </div>
        </div>
    </Html>
    
  )
}

export default Loader