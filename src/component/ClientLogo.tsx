"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { clientdata } from "../constant/alldata";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

function ClientLogo() {
    return (
        <>
            <Swiper
                className="swiper client-swiper"
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1500,
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 4
                    },
                    575: {
                        slidesPerView: 3
                    },
                    320:{
                        slidesPerView:2
                    },
                }}
                modules={[Autoplay]}
            >
                {clientdata.map((data, i) => (
                    <SwiperSlide key={i} className="wow bounceIn">
                        <div className="clients-logo1">
                            <Image src={data.image} alt="log" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}
export default ClientLogo;