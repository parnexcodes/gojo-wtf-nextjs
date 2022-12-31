import React from "react";
import Head from "next/head";

// Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecentAnime from "../components/RecentAnime";
import TrendingAnime from "../components/TrendingAnime";
import PopularAnime from "../components/PopularAnime";
import AllTimeFavourites from "../components/AllTimeFavourites";
import HomeSlider from "../components/HomeSlider";

export async function getServerSideProps(context) {
  const [recent, trending, popular, allTimeFavourite] = await Promise.all([
    (
      await fetch(
        "https://gojo-wtf-api.vercel.app/meta/anilist/recent-episodes"
      )
    ).json(),
    (
      await fetch(
        "https://api.consumet.org/meta/anilist/advanced-search?sort=[%22TRENDING_DESC%22]"
      )
    ).json(),
    (
      await fetch(
        "https://api.consumet.org/meta/anilist/advanced-search?sort=[%22POPULARITY_DESC%22]"
      )
    ).json(),
    (
      await fetch(
        "https://api.consumet.org/meta/anilist/advanced-search?sort=[%22FAVOURITES_DESC%22]"
      )
    ).json(),
  ]);
  return {
    props: {
      recent: recent.results,
      trending: trending.results,
      popular: popular.results,
      favourites: allTimeFavourite.results,
    }, // will be passed to the page component as props
  };
}

function Home({ recent, trending, popular, favourites }) {
  return (
    <>
      <Head>
        <title>Gojo - Watch anime for free, no ads</title>
        <meta
          name="og:description"
          content="Gojo is an Anime Streaming Site with minimal UI and ad-free anime streaming experience."
        ></meta>
        <meta
          name="description"
          content="Gojo is an Anime Streaming Site with minimal UI and ad-free anime streaming experience."
        ></meta>
        <meta property="og:image" content="/logo.png" />
        <meta property="image" content="/logo.png" />
        <meta name="og:title" content="gojo.wtf"></meta>
        <meta name="title" content="gojo.wtf"></meta>
        <meta
          property="og:url"
          content="https://gojo-wtf-nextjs.vercel.app"
        ></meta>
        <meta
          property="url"
          content="https://gojo-wtf-nextjs.vercel.app"
        ></meta>
      </Head>
      <Header />
      <HomeSlider data={trending} />
      <RecentAnime data={recent} />
      <TrendingAnime data={trending} />
      <PopularAnime data={popular} />
      <AllTimeFavourites data={favourites} />
      <Footer />
    </>
  );
}

export default Home;
