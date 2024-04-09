import { useState } from "react"

function Menu({getBool}) {
    const [bool,setBool] = useState(true)
    const handleNav = () => {
    setBool(!bool)
    getBool(bool)
}

  return (
    <button onClick={handleNav} className='menu sm:hidden absolute top-3 right-3'>
      {bool?<img className=" w-10" src="https://cdn-icons-png.flaticon.com/512/4254/4254068.png" alt="" />:"Menu"}
    </button>
  )
}

export default Menu