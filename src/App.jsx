import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import ErrorPage from './pages/Error'
import { useContext } from 'react'
import { BuildingContext } from './context/buildingContext'
import Layout from './components/Layout'

function App() {
   //สร้าง Routing สำหรับหน้าเว็ปต่างๆ
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>, //กรณีที่ไม่พบหน้าเว็ป หรือ 404 response
      children: [                 //ลิงค์สำหรับหน้าเว็ปต่างๆ ของโปรเจ็ค
        {index: true, element: <Home/>},
      ]
    }
  ])

  const {lightTheme} = useContext(BuildingContext)

  return (
    <div className={`bg-slate-300/20 ${lightTheme ? "text-black":"text-white"}`}>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App

