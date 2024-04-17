
import { NavLink } from 'react-router-dom'

function Navbar() {
 
  return (
    <div className="navbar bg-base-100 text-white absolute">
  <div className="navbar-start">
    <div className="dropdown z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52 gap-3 flex flex-col justify-center place-items-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/ourprocess"}>Our Process</NavLink>
        <NavLink to={"/aboutus"}>About us</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl z-50">Mouve Interio</a>
  </div>
  <div className="navbar-end mr-10">
      <NavLink to={"/"} className={"z-[999]"}><img className=' w-8 rounded-full' src="https://static.wixstatic.com/media/5edfa9_ee63e8792bbc4428ae15f05ddaaadb33~mv2.png/v1/fill/w_64,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mi.png" alt="" /></NavLink>
  </div>
</div>
  )
}

export default Navbar