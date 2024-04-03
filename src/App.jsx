import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MouseFollower from './utility/MouseFollower'
import OurProcess from './Pages/OurProcess'
import Services from './Pages/Services'
function App() {
 
  return (
    <>
        <Navbar />
        {/* <MouseFollower />
        <Outlet /> */}
    </>
  )
}

export default App