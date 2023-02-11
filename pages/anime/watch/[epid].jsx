import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Spinner } from "@chakra-ui/react";
import sanitizeHtml from "sanitize-html";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { NextSeo } from "next-seo";

const VideoPlayer = dynamic(
  () => import("../../../components/Player/VideoPlayer"),
  {
    ssr: false,
  }
);

function EpID() {
  const router = useRouter();
  const [rerender, setRerender] = useState(false);
  const { epid, id, ep } = router.query;
  const [data, setData] = useState();
  const [streamData, setStreamData] = useState();

  const fetchData = async (epid, id) => {
    const [streamData, data] = await Promise.all([
      (
        await fetch(
          `https://gojo-api.onrender.com/anime/gogoanime/watch/${epid}?server=vidstreaming`
        )
      ).json(),
      (
        await fetch(`https://gojo-api.onrender.com/meta/anilist/info/${id}`)
      ).json(),
    ]);
    setData(data);
    setStreamData(streamData);
    setRerender(!rerender);

    // let specificEp = data?.episodes?.filter((episode) => episode.id == epid);

    let recentlyWatched = [];
    recentlyWatched = JSON.parse(localStorage.getItem("recentlyWatched")) || [];
    let alreadyExist = recentlyWatched.some((obj) => obj.id === id);
    if (!alreadyExist) {
      recentlyWatched.push({
        id: id,
        ep: ep,
        epid: epid,
        title: data.title.english ? data.title.english : data.title.romaji,
        image: data.image,
        totalep: data.totalEpisodes
      });
      localStorage.setItem("recentlyWatched", JSON.stringify(recentlyWatched));
    } else {
      let indexval = recentlyWatched.findIndex((value) => value.id == id);
      recentlyWatched.splice(indexval, 1)
      recentlyWatched.push({
        id: id,
        ep: ep,
        epid: epid,
        title: data.title.english ? data.title.english : data.title.romaji,
        image: data.image,
        totalep: data.totalEpisodes
      });
      localStorage.setItem("recentlyWatched", JSON.stringify(recentlyWatched));
    }
  };

  useEffect(() => {
    router.query.epid ? fetchData(epid, id) : null;
  }, [router.isReady, router.query.epid]);

  const handleClick = (epid, id, epnum) => {
    setRerender(!rerender);
    router.push(`/anime/watch/${epid}?id=${id}&ep=${epnum}`, undefined, {
      shallow: true,
    });
    // .then(() => router.reload())
  };

  const handleRoutePushClick = (id) => {
    router.push(`/anime/detail/${id}`);
  };

  return (
    <>
      <Header />
      {data && data ? (
        <NextSeo
          title={
            data.title.english != null
              ? "Watching " +
                data.title.english +
                " Episode - " +
                ep +
                " | gojo"
              : "Watching " +
                data.title.romaji +
                " Episode - " +
                ep +
                " | gojo"
          }
          description={sanitizeHtml(data.description, {
            allowedTags: [],
            allowedAttributes: {},
          }).trim()}
          openGraph={{
            url: `https://gojo-api.onrender.com/anime/watch/${epid}?id=${id}&ep=${ep}`,
            title: `Watch ${
              data.title.english != null
                ? data.title.english
                : data.title.romaji
            }`,
            description: sanitizeHtml(data.description, {
              allowedTags: [],
              allowedAttributes: {},
            }).trim(),
            images: [{ url: data.image }],
            siteName: "gojo-wtf-nextjs.vercel.app",
          }}
        />
      ) : null}
      <div className="min-h-screen bg-[#181B22] pb-16">
        <div className="mx-8 pt-8">
          {streamData && streamData && rerender ? (
            <VideoPlayer
              data={streamData}
              // show={show} ep={ep}
            />
          ) : (
            <div className="flex flex-col items-center text-white text-4xl">
              <Spinner color="#84cc16" size="xl" />
              <h1 className="text-white text-lg mt-4">Fetching ...</h1>
            </div>
          )}
        </div>
        <div className="flex justify-center space-x-4">
          <h1
            role={"button"}
            onClick={() => handleRoutePushClick(id)}
            className="p-4 bg-lime-500 inline-block mt-6 rounded-md font-bold text-black  hover:opacity-75 cursor-pointer"
          >
            Back
          </h1>
        </div>
        <div className="grid grid-cols-10 mx-[25rem] gap-4 justify-center">
          {data && data
            ? data?.episodes?.map((item, index) => {
                return (
                  <div key={index}>
                    <h1
                      role={"button"}
                      onClick={() => handleClick(item.id, id, item.number)}
                      className="p-2 text-center bg-[#282C37] rounded-md font-bold text-white hover:bg-lime-500 active:bg-lime-500 hover:text-black cursor-pointer"
                    >
                      {item.number}
                    </h1>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EpID;
