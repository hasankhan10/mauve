import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/imageData'
import { NavLink } from 'react-router-dom';
import imageData from '../assets/imageData';
function Services() {
  return (
    <div className='services w-screen h-screen flex justify-center place-items-center flex-col'>
        <section className=' w-[80%] h-[70%] rounded-xl overflow-hidden mt-16 shadow-2xl'>
                <Swiper
                className='z-40'
                  modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  mousewheel={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                  loop={true}   
                  
            >
              <SwiperSlide><img src={imageData[0].url} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imageData[1].url} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imageData[2].url} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imageData[3].url} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imageData[4].url} alt="" /></SwiperSlide>
              <SwiperSlide><img src={imageData[5].url} alt="" /></SwiperSlide>
              ...
            </Swiper>
        </section>
        <NavLink to={'/contact'} className={"z-50"}>
          <button className=" w-56 h-14 bg-blue-800 text-white font-bold text-xl mt-8 rounded-md hover:scale-105 duration-300 hover:shadow-2xl shadow-black border-white border-2">Get in touch</button>
        </NavLink>
    </div>
  )
}

export default Services