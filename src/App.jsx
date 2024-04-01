import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MouseFollower from './utility/MouseFollower'
function App() {
 
  return (
    <>
        <Navbar />
        <MouseFollower />
        <Outlet />
    </>
  )
}

export default App