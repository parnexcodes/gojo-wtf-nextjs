import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import CharacterCard from "./Cards/CharacterCard";

function Characters({ data }) {
  return (
    <div className="mx-10 my-4">
      <h1 className="text-3xl text-white flex justify-center md:justify-start">Characters</h1>
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 8,
            },
          }}
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
        >
          {data.characters.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CharacterCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
  );
}

export default Characters;
