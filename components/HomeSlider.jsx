import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import { Icon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";

function HomeSlider({ data }) {
  return (
    <div>
      <div className="md:px-[10.5rem] md:py-8 px-4 mt-4">
        <h1 className="text-3xl text-white font-bold">Recommended</h1>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="min-w-full h-72 object-cover brightness-50 relative mt-6 rounded-md"
                  src={item.cover}
                  alt=""
                />
                <div className="flex justify-between">
                  <h1 className="text-white md:bottom-16 bottom-10 break-words relative md:left-8 left-4 md:text-2xl text-sm font-extrabold truncate w-48 md:w-max">
                    {item.title.english != null
                      ? item.title.english
                      : item.title.romaji}
                  </h1>
                  <Link
                    className="mflex justify-center self-start bottom-24 right-8 relative"
                    href={`/anime/detail/${item.id}`}
                  >
                    <div className="md:pt-3 pt-1 md:pb-3 pb-1 md:pr-8 pr-4 md:pl-8 pl-4 md:mt-4 mt-[52px] hover:opacity-90 bg-lime-500 text-black rounded-md text-sm md:text-base">
                      <Icon as={FaPlay} className="mr-3" />
                      Watch
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
