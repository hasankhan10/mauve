import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MouseFollower from './utility/MouseFollower'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
function App() {
 
  return (
    <>
        {/* <Navbar /> */}
        <Contact />
        {/* <MouseFollower /> */}
        {/* <Outlet /> */}
    </>
  )
}

export default App