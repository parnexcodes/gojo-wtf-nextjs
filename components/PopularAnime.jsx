import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import TrendingCard from "./Cards/TrendingCard";

function PopularAnime({ data }) {
  return (
    <div className="px-[10.5rem] py-8">
      <h1 className="text-3xl text-white font-bold">Popular Anime</h1>
      <div className="flex flex-wrap gap-4">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          spaceBetween={16}
          slidesPerView={6}
          navigation={true}
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <Link href={`/anime/detail/${item.id}`}>
                  <TrendingCard data={item} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularAnime;
