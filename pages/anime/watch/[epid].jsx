import React from "react";
import dynamic from "next/dynamic";
import { FaPlay } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

import Header from "../../../components/Header";

const Player = dynamic(() => import("../../../components/Player/Player", {
    ssr: false
}));

export async function getServerSideProps(context) {
  let { epid } = context.params;
  const req = await fetch(
    `https://gojo-wtf-api.vercel.app/anime/gogoanime/watch/${epid}?server=vidstreaming`
  );
  const res = await req.json();
  return {
    props: {
        epid,
      streamData: res,
    }, // will be passed to the page component as props
  };
}

function EpID({ streamData }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#181B22] pb-16">
        <div className="mx-8 pt-8">
            <Player data={streamData} />
        </div>
        {/* <div className="flex flex-wrap mx-16 justify-center gap-2">
          {data.episodes.map((item, index) => {
            return (
              <div key={index}>
                <h1
                  role={"button"}
                  // onClick={() => handleClick(item.episode_number)}
                  className="p-2 bg-[#282C37] inline-block mt-6 rounded-md font-bold text-white hover:bg-lime-500 hover:text-black"
                >
                  <Icon className="mr-3" as={FaPlay} />
                  {item.number}
                </h1>
              </div>
            );
          })}
        </div> */}
        <div className="flex justify-center mt-8 space-x-4">
          <h1
            // role={"button"}
            // onClick={() => handleRoutePushClick(`/movie/${playid}`)}
            className="p-4 bg-lime-500 inline-block mt-6 rounded-md font-bold text-black  hover:opacity-75"
          >
            Back
          </h1>
        </div>
      </div>
    </>
  );
}

export default EpID;
