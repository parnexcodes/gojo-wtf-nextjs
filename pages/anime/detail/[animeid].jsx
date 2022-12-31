import React from "react";
import Link from "next/link";
import Head from "next/head";
import sanitizeHtml from "sanitize-html";

import Header from "../../../components/Header";
import { Icon } from "@chakra-ui/icons";
import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import Footer from "../../../components/Footer";

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
      <Head>
        <title>
          {data.title.english != null
            ? data.title.english
            : data.title.userPreferred}{" "}
          - gojo
        </title>
        <meta
          name="og:description"
          content={sanitizeHtml(data.description, {
            allowedTags: [],
            allowedAttributes: {},
          }).trim()}
        ></meta>
        <meta
          name="description"
          content={sanitizeHtml(data.description, {
            allowedTags: [],
            allowedAttributes: {},
          }).trim()}
        ></meta>
        <meta property="og:image" content={data.image} />
        <meta property="image" content={data.image} />
        <meta
          name="title"
          content={`
${
  data.title.english != null ? data.title.english : data.title.userPreferred
} - gojo`}
        ></meta>
        <meta
          name="og:title"
          content={`
${
  data.title.english != null ? data.title.english : data.title.userPreferred
} - gojo`}
        ></meta>
        <meta property="og:url" content={`https://gojo-wtf-nextjs.vercel.app/anime/detail/${animeid}`}></meta>
        <meta property="url" content={`https://gojo-wtf-nextjs.vercel.app/anime/detail/${animeid}`}></meta>
      </Head>
      <Header />
      <div className="min-h-screen bg-[#181B22]">
        <img
          className="min-w-full h-72 object-cover brightness-50 relative"
          src={data.cover}
          alt=""
        />
        <div className="md:flex md:h-[280px]">
          <img
            className="h-96 rounded-md relative z-20 md:bottom-32 bottom-20 md:left-10 left-[70px]"
            src={data.image}
            alt=""
          />
          <div className="md:ml-20 mx-10 md:mt-8 mb-8 -mt-12 flex flex-col">
            <span className="text-4xl font-bold text-white text-center md:text-left">
              {data.title.english != null
                ? data.title.english
                : data.title.userPreferred}
            </span>
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              {data.genres.map((item, index) => {
                return (
                  <Link key={index} href={"/"}>
                    <div className="p-2 text-white text-xs bg-[#282C37] hover:bg-lime-500 hover:text-black rounded-md">
                      {item}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-[#939ba2] justify-center md:justify-start">
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
            <Link
              className="flex justify-center md:self-start"
              href={{
                pathname: `/anime/watch/${data.episodes[0].id}`,
                query: {
                  id: animeid,
                },
              }}
            >
              <div className="pt-3 pb-3 pr-8 pl-8 mt-4 text-white text-lg bg-[#282C37] hover:bg-lime-500 hover:text-black rounded-md">
                <Icon as={FaPlay} className="mr-3" />
                Play
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-10">
          <h1 className="text-3xl text-white flex justify-center md:justify-start">
            Overview
          </h1>
          <h1 className="text-[#939ba2] break-all mt-2">
            {sanitizeHtml(data.description, {
              allowedTags: [],
              allowedAttributes: {},
            }).trim()}
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnimeID;
