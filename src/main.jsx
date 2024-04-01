import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Contact from './Pages/Contact.jsx'
import OurProcess from './Pages/OurProcess.jsx'

const MainRouter = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ourprocess" element={<OurProcess />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <MainRouter />
)
