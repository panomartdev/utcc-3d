import { useState } from 'react'

const About = () => {
    const [count, setCount] = useState(2);
  return (
    <div>About Page
        <p id='number' className='font-bold text-red-700 underline'>{count}</p>
        <button  onClick={() => setCount(count + 1)} className='border-solid border-2 border-black '>Increment</button>
    </div>
  )
}

export default About