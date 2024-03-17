
function Contact() {
  return (
    <div className='contact w-screen h-screen flex flex-col justify-center place-items-center'>

        <img className=" absolute w-full h-full bg-cover object-cover blur-sm -z-10" src='https://cdn.dribbble.com/users/1040798/screenshots/15685874/media/aa9588469e19517c2b94b1addd15d11d.gif' alt="" />
        
        <h1 className=" absolute z-10 top-[90px] text-4xl font-bold font-mono text-black bg-yellow-500 p-2 rounded-md">Want to Contact with us ?</h1>
        <section className=" w-full h-full flex justify-center place-items-center space-x-10 mt-10">
          <div className="form w-[55%] h-[65%] rounded-2xl backdrop-blur-md overflow-hidden flex justify-center place-items-center">
              <form className=" w-[85%] h-[95%] flex flex-col justify-center place-items-center gap-5">

                  <input className=" w-full" type="text" name="name" id="name" required placeholder="Enter your Name"/>

                  <input className=" w-full" type="email" name="email" id="email" required placeholder="Enter your Email address"/>

                  <input className=" w-full" type="text" name="subject" id="subject" required placeholder="Subject"/>

                  <input className=" w-full" type="number" name="number" id="number" required placeholder="Enter your Phone number"/>

                  <textarea className=" w-full" name="message" id="message" cols="30" required rows="5" placeholder="Type your Message here !"></textarea>

                  <input className=" text-xl font-bold w-40 cursor-pointer" type="submit" value="Submit" />
              </form> 
          </div>
          <div className="con w-72 h-96 bg-gray-600 rounded-xl text-white font-semibold text-lg text-center flex flex-col gap-6 justify-center place-items-center">
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
        </section>
    </div>
  )
}

export default Contact