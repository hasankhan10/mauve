
import { TypeAnimation } from 'react-type-animation';
function Home() {
  return (
    <div className="home w-screen h-screen flex justify-end">
        <div className="welcome w-[50%] h-full flex flex-col justify-center place-items-center">
            <h1 className=" text-8xl text-center h-[30%] opacity-95 text-gray-800">
              <TypeAnimation
                sequence={["Wellcome to Mauve Interio"]}
                cursor={false}
                speed={15}
              />
            </h1>
            <p className=" text-2xl text-center font-mono font-semibold opacity-95">Interior Design for Great Homes and Working Space</p>
            <p className="text-center text-3xl mt-6 p-2 opacity-80 font-semibold">“It’s not what you look at that matters, it’s what you see” - Henry David Thoreau
            </p>

            <button className=" w-56 h-14 bg-blue-800 text-white font-bold text-xl mt-8 rounded-md hover:scale-105 duration-300 hover:shadow-2xl shadow-black">Get in touch</button>
        </div>
    </div>
  )
}

export default Home