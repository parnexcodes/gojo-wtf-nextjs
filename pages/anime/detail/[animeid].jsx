import React from "react";
import Link from "next/link";

import Header from "../../../components/Header";
import { Icon } from "@chakra-ui/icons";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

export async function getServerSideProps(context) {
  let { animeid } = context.params;
  const req = await fetch(
    `https://gojo-wtf-api.vercel.app/meta/anilist/info/${animeid}`
  );
  const res = await req.json();
  return {
    props: {
      animeid,
      data: res,
    }, // will be passed to the page component as props
  };
}

function AnimeID({ animeid, data }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#181B22]">
        <img
          className="min-w-full h-72 object-cover brightness-50 relative"
          src={data.cover}
          alt=""
        />
        <div className="flex h-[280px]">
          <img
            className="h-96 rounded-md relative z-20 bottom-32 left-10"
            src={data.image}
            alt=""
          />
          <div className="ml-20 mt-8 flex flex-col">
            <span className="text-4xl font-bold text-white">
              {data.title.english != null
                ? data.title.english
                : data.title.userPreferred}
            </span>
            <div className="flex space-x-2 mt-4">
              {data.genres.map((item, index) => {
                return (
                  <Link href={"/"}>
                    <div
                      key={index}
                      className="p-2 text-white text-xs bg-[#282C37] hover:bg-lime-500 hover:text-black rounded-md"
                    >
                      {item}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex space-x-2 mt-4 text-[#939ba2]">
              <span>
                <Icon as={AiFillStar} className="mr-1" />
                {data.rating}
              </span>
              <span>|</span>
              <span>Ep: {data.totalEpisodes}</span>
              <span>|</span>
              <span>{data.duration} minutes</span>
              <span>|</span>
              <span>{data.status}</span>
              <span>|</span>
              <span>
                {data.startDate.year}/{data.startDate.month}/
                {data.startDate.day}
              </span>
              <span>-</span>
              {data.endDate.year != null ? (
                <span>
                  {data.endDate.year}/{data.endDate.month}/{data.endDate.day}
                </span>
              ) : (
                <span>???</span>
              )}
            </div>
            <Link className="self-start" href={`/anime/watch/${data.episodes[0].id}`}>
              <div className="pt-3 pb-3 pr-8 pl-8 mt-4 text-white text-lg bg-[#282C37] hover:bg-lime-500 hover:text-black rounded-md">
                <Icon as={FaPlay} className="mr-3" />
                Play
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-10">
          <h1 className="text-3xl text-white">Overview</h1>
          <h1 className="text-[#939ba2] break-all mt-2">
            {data.description.trim()}
          </h1>
        </div>
      </div>
    </>
  );
}

export default AnimeID;
