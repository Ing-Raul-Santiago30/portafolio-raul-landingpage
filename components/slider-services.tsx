"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Unifica los módulos
import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]} // Un solo array para módulos
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay activado con delay de 5 segundos
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{ clickable: true }} // Paginación activada
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secondary border-2">
                        <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;
