import { NavLink } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"

function OurProcess() {
  return (
    <div className="ourProcess w-screen h-screen flex justify-center place-items-center sm:space-x-10 sm:pt-10">
        <section className="pic hidden sm:block w-[40%] h-[80%] overflow-hidden rounded-2xl">
            <img className=" w-full h-full" src="https://i.pinimg.com/564x/99/54/8a/99548af51d74f323b630a15621d78599.jpg" alt="" />
        </section>
        <section className=" sm:w-[45%] sm:h-[80%] z-30 backdrop-blur-2xl flex flex-col gap-10 justify-center place-items-center rounded-xl p-2">
            <h1 className="text-center sm:text-6xl text-3xl font-bold text-amber-950">OUR METHODOLOGY</h1>
            <p className="text-center text-xl font-semibold">
                <TypeAnimation
                    sequence={["At Mauve interio our methodological approach lets us fully understand what solutions you really need. We work directly with all of our clients, implementing a variety of ideas that they have in mind. We then carefully craft a look that will reflect both their thoughts and needs, as well as their personality to create a stunningly beautiful room in the end."]}
                    cursor={false}
                    speed={50}
                />
            </p>
            <NavLink to={"/contact"}>
              <button className=" w-56 h-14 bg-blue-800 text-white font-bold text-xl mt-8 rounded-md hover:scale-105 duration-300 hover:shadow-2xl shadow-black">Get in touch</button>
            </NavLink>
        </section>
    </div>
  )
}

export default OurProcess