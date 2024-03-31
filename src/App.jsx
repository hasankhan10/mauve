import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import OurProcess from './Pages/OurProcess'
import Services from './Pages/Services'
import MouseFollower from './utility/MouseFollower'
function App() {
 
  return (
    <>
        <Navbar />
        <MouseFollower />
        <Services />
    </>
  )
}

export default App