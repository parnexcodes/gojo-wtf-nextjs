import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FaPlay } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

import Header from "../../../components/Header";
const VideoPlayer = dynamic(() => import('../../../components/Player/VideoPlayer'), {
  ssr: false
})

// export async function getServerSideProps(context) {
//   let { epid } = context.params
//   let { id } = context.query
//   const [streamData, metaData] = await Promise.all([
//     (
//       await fetch(
//         `https://gojo-wtf-api.vercel.app/anime/gogoanime/watch/${epid}?server=vidstreaming`
//       )
//     ).json(),
//     (
//       await fetch(`https://gojo-wtf-api.vercel.app/meta/anilist/info/${id}`)
//     ).json(),
//   ]);
//   return {
//     props: { streamData, metaData, id }, // will be passed to the page component as props
//   }
// }

function EpID() {
  const router = useRouter()
  const [rerender, setRerender] = useState(false)
  const { epid, id } = router.query;
  const [data, setData] = useState();
  const [streamData, setStreamData] = useState();

  const fetchData = async (epid, id) => {
    const [streamData, data] = await Promise.all([
      (
        await fetch(
          `https://gojo-wtf-api.vercel.app/anime/gogoanime/watch/${epid}?server=vidstreaming`
        )
      ).json(),
      (
        await fetch(`https://gojo-wtf-api.vercel.app/meta/anilist/info/${id}`)
      ).json(),
    ]);
    setData(data);
    setStreamData(streamData);
    setRerender(!rerender)
  };

  useEffect(() => {
    fetchData(epid, id);
  }, [router.query.epid]);


  const handleClick = (epid, id) => {
    setRerender(!rerender)
    router.push(`/anime/watch/${epid}?id=${id}`, undefined, { shallow: true })
    // .then(() => router.reload())
  }

  const handleRoutePushClick = (id) => {
    router.push(`/anime/detail/${id}`)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#181B22] pb-16">
        <div className="mx-8 pt-8">
          {streamData && streamData && rerender ? (
            <VideoPlayer data={streamData} 
            // show={show} ep={ep}
            />
          ) : (
            <div className="flex justify-center text-white text-4xl">
              Loading...
            </div>
          )}
        </div>
        <div className="flex flex-wrap mx-16 justify-center gap-2">
          {data && data ? data?.episodes?.map((item, index) => {
            return (
              <div key={index}>
                <h1
                  role={"button"}
                  onClick={() => handleClick(item.id, id)}
                  className="p-1 pl-4 pr-4 bg-[#282C37] inline-block mt-6 rounded-md font-bold text-white hover:bg-lime-500 hover:text-black cursor-pointer"
                >
                  {item.number}
                </h1>
              </div>
            );
          }): null}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <h1
            role={"button"}
            onClick={() => handleRoutePushClick(id)}
            className="p-4 bg-lime-500 inline-block mt-6 rounded-md font-bold text-black  hover:opacity-75 cursor-pointer"
          >
            Back
          </h1>
        </div>
      </div>
    </>
  );
}

export default EpID;
