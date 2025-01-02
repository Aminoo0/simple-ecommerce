'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider({ allWithoutOne }) {

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1250: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                },
                // 1500: {
                //     slidesPerView: 4,
                //     spaceBetween: 50,
                // },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            {allWithoutOne.map((product) =>
                <SwiperSlide className='' key={product?.id}>
                    <div className="p-5">
                        <Link href={`/product/${product?.id}`}>
                            <div className="p-3 bg-gradient-to-r from-slate-500 to-gray-200 rounded-lg flex flex-col justify-center items-center hover:scale-105 duration-300">
                                <Image src={product?.image} loading="lazy" priority={false} className="rounded-lg w-3/4 h-[300px] shadow-2xl -mt-10 border border-black hover:scale-105 duration-300" width={100} height={100} alt={product.title} />
                                <h2 className="font-bold tracking-wide text-stone-700 text-lg">{product?.title.split(' ').slice(0, 4).join(' ')}</h2>
                                <div className="flex justify-evenly w-full my-2">
                                    <h3 className="font-bold text-emerald-950">{product?.price} $</h3>
                                    <h3 className="bg-blue-300 p-1 px-3 rounded-xl font-semibold text-sm">{product?.category}</h3>
                                </div>
                                <h3 className="font-semibold">{product?.description.split(' ').slice(0, 3).join(' ')}...</h3>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}
