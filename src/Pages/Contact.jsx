
function Contact() {
  return (
    <div className='contact w-screen h-screen flex flex-col justify-center place-items-center'>

        <img className=" absolute w-full h-full bg-cover object-cover blur-sm -z-10" src='https://cdn.dribbble.com/users/1040798/screenshots/15685874/media/aa9588469e19517c2b94b1addd15d11d.gif' alt="" />
        
        <h1 className=" absolute z-10 top-[90px] text-4xl font-bold font-mono text-black bg-yellow-500 p-2 rounded-md">Want to Contact with us ?</h1>
        <section className=" w-full h-full flex justify-center place-items-center space-x-10 mt-10">
          <div className="form w-[55%] h-[65%] rounded-2xl backdrop-blur-md overflow-hidden">
              <form className=" w-full h-full">

              </form>
          </div>
          <div className="con w-72 h-96 bg-gray-600 rounded-xl"></div>
        </section>
    </div>
  )
}

export default Contact