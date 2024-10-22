import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

import About from './pages/About'
import ErrorPage from './pages/Error'

function App() {
   //สร้าง Routing สำหรับหน้าเว็ปต่างๆ
  const router = createBrowserRouter([
    {
      path: '/',
      element: '',
      errorElement: <ErrorPage/>, //กรณีที่ไม่พบหน้าเว็ป หรือ 404 response
      children: [                 //ลิงค์สำหรับหน้าเว็ปต่างๆ ของโปรเจ็ค
        {index: true, element: <Home/>},
        {path: '/about', element: <About/>},
      ]
    }
  ])

  return (
    <div className='bg-slate-300/20'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App

