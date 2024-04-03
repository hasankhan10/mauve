import { useState } from "react"

function Menu({getBool}) {
    const [bool,setBool] = useState(false)
    const handleNav = () => {
    setBool(!bool)
    getBool(bool)
}

  return (
    <button onClick={handleNav} className='menu sm:hidden absolute top-3 right-3'>menu</button>
  )
}

export default Menu