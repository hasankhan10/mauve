
import { NavLink } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
function Home() {
  return (
    <div className="home w-screen h-screen flex sm:justify-end justify-center">
        <div className="welcome sm:w-[50%] w-full h-full flex flex-col justify-center place-items-center">
            <h1 className=" sm:text-8xl text-5xl text-center sm:h-[30%] h-[18%] opacity-95 text-gray-800">
              <TypeAnimation
                sequence={["Wellcome to Mauve Interio"]}
                cursor={false}
                speed={15}
              />
            </h1>
            <p className=" text-2xl text-center font-mono font-semibold opacity-95">Interior Design for Great Homes and Working Space</p>
            <p className=" text-center text-3xl mt-6 p-2 opacity-80 font-semibold">“It’s not what you look at that matters, it’s what you see” - Henry David Thoreau
            </p>

            <NavLink to={"/contact"} className={" z-50"}>
              <button className=" w-56 h-14 bg-blue-800 text-white font-bold text-xl mt-8 rounded-md hover:scale-105 duration-300 hover:shadow-2xl shadow-black">Get in touch</button>
            </NavLink>
        </div>
    </div>
  )
}

export default Home