import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MouseFollower from './utility/MouseFollower'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import OurProcess from './Pages/OurProcess'
function App() {
 
  return (
    <>
        {/* <Navbar /> */}
        <OurProcess />
        {/* <MouseFollower /> */}
        {/* <Outlet /> */}
    </>
  )
}

export default App