import { TypeAnimation } from "react-type-animation"

function OurProcess() {
  return (
    <div className="ourProcess w-screen h-screen flex justify-center place-items-center space-x-10 pt-10">
        <section className="pic w-[40%] h-[80%] overflow-hidden rounded-2xl">
            <img className=" w-full h-full" src="https://i.pinimg.com/564x/99/54/8a/99548af51d74f323b630a15621d78599.jpg" alt="" />
        </section>
        <section className=" w-[45%] h-[80%] backdrop-blur-2xl flex flex-col gap-10 justify-center place-items-center">
            <h1 className=" text-center text-6xl font-bold text-amber-950">OUR METHODOLOGY</h1>
            <p className=" text-center text-xl font-semibold">
                <TypeAnimation
                    sequence={["At Mauve interio our methodological approach lets us fully understand what solutions you really need. We work directly with all of our clients, implementing a variety of ideas that they have in mind. We then carefully craft a look that will reflect both their thoughts and needs, as well as their personality to create a stunningly beautiful room in the end."]}
                    cursor={false}
                    speed={50}
                />
            </p>
            <button className=" w-40 h-12 bg-slate-500 rounded-xl text-white text-xl font-medium border-2 border-black hover:scale-[1.02] duration-150 hover:shadow-2xl">Get in touch</button>
        </section>
    </div>
  )
}

export default OurProcess