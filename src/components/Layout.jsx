import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div>
        <Header/>
            <Outlet/>
            {/* Outlet คือ Element ต่างๆ ของเว็ปแต่ล่ะหน้าอย่างเช่น / (Home) , /about (About) */}
           
    </div>
  )
}

export default Layout