import Map from "../Components/Map"

function Contact() {
  return (
    
      <div className='contact w-screen h-screen flex flex-col justify-center place-items-center bg-gray-400'>

          <h1 className=" absolute z-10 top-[95px] text-4xl font-bold font-mono text-black p-2 rounded-md">Want to Contact with us ?</h1>
          <section className=" w-full h-full flex justify-center place-items-center space-x-10 mt-10">
            <Map />
            <div className="form w-[50%] h-[65%] rounded-2xl backdrop-blur-sm overflow-hidden flex justify-center place-items-center">
                <form className=" w-[85%] h-[95%] flex flex-col justify-center place-items-center gap-5">

                    <input className=" w-full" type="text" name="name" id="name" required placeholder="Enter your Name"/>

                    <input className=" w-full" type="email" name="email" id="email" required placeholder="Enter your Email address"/>

                    <input className=" w-full" type="number" name="number" id="number" required placeholder="Enter your Phone number"/>

                    <input className=" w-full" type="text" name="subject" id="subject" required placeholder="Subject"/>

                    <textarea className=" w-full" name="message" id="message" cols="30" required rows="5" placeholder="Type your Message here !"></textarea>


                    <button className=" text-xl font-bold w-40 h-10 cursor-pointer bg-blue-800 text-white rounded-lg hover:bg-blue-700 hover:border-2" type="submit">Submit</button>

                </form> 
            </div>
            <div className="con w-72 h-96 backdrop-blur-lg rounded-xl font-semibold text-lg text-center flex flex-col gap-6 justify-center place-items-center">
              <p>804, 8th floor, Arch Square X2</p>
              <p>EP-Y1, EP Block, Sector V, Saltlake</p>
              <p>Kolkata, West Bengal 700091</p>
              <p>info@mauvees.com</p>
              <p>+91 99338 48169</p>
              <a href="https://www.facebook.com/MauveInterio" target="_blank">
                <img className=" w-8" src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" alt="" />
              </a>
              <p>©2024 by Mauve interio.</p>
            </div>
          </section>=
      </div>
    
  )
}

export default Contact