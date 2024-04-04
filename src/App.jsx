import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MouseFollower from './utility/MouseFollower'
import Home from './Pages/Home'
function App() {
 
  return (
    <>
        {/* <Navbar /> */}
        <Home />
        {/* <MouseFollower /> */}
        {/* <Outlet /> */}
    </>
  )
}

export default App