import React from "react";
import Head from "next/head";

// Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecentAnime from "../components/RecentAnime";
import TrendingAnime from "../components/TrendingAnime";
import PopularAnime from "../components/PopularAnime";

export async function getServerSideProps(context) {
  const [recent, trending, popular] = await Promise.all([
    (
      await fetch(
        "https://gojo-wtf-api.vercel.app/meta/anilist/recent-episodes"
      )
    ).json(),
    (
      await fetch("https://gojo-wtf-api.vercel.app/meta/anilist/trending")
    ).json(),
    (
      await fetch("https://gojo-wtf-api.vercel.app/meta/anilist/popular")
    ).json(),
  ]);
  return {
    props: {
      recent: recent.results,
      trending: trending.results,
      popular: popular.results,
    }, // will be passed to the page component as props
  };
}

function Home({ recent, trending, popular }) {
  return (
    <>
      <Head>
        <title>Gojo - Watch anime for free, no ads</title>
      </Head>
      <Header />
      <RecentAnime data={recent} />
      <TrendingAnime data={trending} />
      <PopularAnime data={popular} />
      <Footer />
    </>
  );
}

export default Home;
