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
                  <h1 className="text-white md:bottom-16 bottom-24 relative left-8 text-2xl font-extrabold">
                    {item.title.english != null
                      ? item.title.english
                      : item.title.userPreferred}
                  </h1>
                  <Link
                    className="md:flex md:justify-center md:self-start md:bottom-24 md:right-8 md:relative hidden"
                    href={`/anime/detail/${item.id}`}
                  >
                    <div className="pt-3 pb-3 pr-8 pl-8 mt-4 hover:opacity-90 bg-lime-500 text-black rounded-md">
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
