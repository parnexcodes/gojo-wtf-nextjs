import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import RecentlyWatchedCard from "./Cards/RecentlyWatchedCard";

function RecentlyWatched({ data }) {

  return (
    <div className="md:px-[10.5rem] py-8 px-4">
      <h1 className="text-3xl text-white font-bold">Continue Watching</h1>
      <div className="flex flex-wrap gap-4">
        {data.length > 6 ? (
          <Swiper
            scrollbar={{
              hide: true,
            }}
            spaceBetween={10}
            slidesPerView={2}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 16,
              },
            }}
            modules={[Navigation, Scrollbar]}
            className="mySwiper"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link href={`/anime/detail/${item.id}`}>
                    <RecentlyWatchedCard data={item} />
                  </Link>
                </SwiperSlide>
              );
            }).reverse()}
          </Swiper>
        ) : (
          <div className="flex flex-wrap md:gap-4 gap-2">
            {data.map((item, index) => {
              return (
                <Link href={`/anime/watch/${item.epid}?id=${item.id}&ep=${item.ep}`}>
                  <RecentlyWatchedCard data={item} />
                </Link>
              );
            }).reverse()}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentlyWatched;
