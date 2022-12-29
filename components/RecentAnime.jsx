import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import RecentCard from "./Cards/RecentCard";

function RecentAnime({ data }) {
  return (
    <div className="px-[10.5rem] py-8">
      <h1 className="text-3xl text-white font-bold">Recent Anime</h1>
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
              <SwiperSlide>
                <Link key={index} href={`/anime/detail/${item.id}`}>
                  <RecentCard data={item} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default RecentAnime;
