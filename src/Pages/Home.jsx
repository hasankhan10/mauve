import Spline from '@splinetool/react-spline';
function Home() {
  return (
    <div className="home w-screen h-screen text-white">
        
        <Spline scene='https://prod.spline.design/77cbfAbzzloSGCT5/scene.splinecode' />
        <h1 className='wellcome absolute top-16 text-4xl font-semibold left-10'>Wellcome to Mauve interio</h1>
        <h1 className='wellcome absolute top-28 text-2xl left-10'>Interior Design for Great Homes and Working Space</h1>

    </div>
  )
}

export default Home