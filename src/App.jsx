import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MouseFollower from './utility/MouseFollower'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
function App() {
 
  return (
    <>
        {/* <Navbar /> */}
        <AboutUs />
        {/* <MouseFollower /> */}
        {/* <Outlet /> */}
    </>
  )
}

export default App