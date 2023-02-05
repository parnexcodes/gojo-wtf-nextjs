import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

// Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecentAnime from "../components/RecentAnime";
import TrendingAnime from "../components/TrendingAnime";
import PopularAnime from "../components/PopularAnime";
import AllTimeFavourites from "../components/AllTimeFavourites";
import HomeSlider from "../components/HomeSlider";
import RecentlyWatched from "../components/RecentlyWatched";

export async function getServerSideProps(context) {
  const [recent, trending, popular, allTimeFavourite] = await Promise.all([
    (
      await fetch(
        "https://gojo-parnexcodes.koyeb.app/meta/anilist/recent-episodes"
      )
    ).json(),
    (
      await fetch(
        "https://gojo-parnexcodes.koyeb.app/meta/anilist/advanced-search?sort=[%22TRENDING_DESC%22]"
      )
    ).json(),
    (
      await fetch(
        "https://gojo-parnexcodes.koyeb.app/meta/anilist/advanced-search?sort=[%22POPULARITY_DESC%22]"
      )
    ).json(),
    (
      await fetch(
        "https://gojo-parnexcodes.koyeb.app/meta/anilist/advanced-search?sort=[%22FAVOURITES_DESC%22]"
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
  const [exist, setExist] = useState(false)
  const [recentData, setRecentData] = useState()
  useEffect(() => {
    if (localStorage.getItem('recentlyWatched') !== null) {
      setExist(true)
      setRecentData(JSON.parse(localStorage.getItem('recentlyWatched')))
    } else {
      setExist(false)
    }
  }, [])
  return (
    <>
      <NextSeo
        title="Gojo - Watch anime for free, no ads"
        description="Gojo is an Anime Streaming Site with minimal UI and ad-free anime streaming experience."
        openGraph={{
          url: "https://gojo-wtf-nextjs.vercel.app",
          title: "Gojo - Watch anime for free, no ads",
          description:
            "Gojo is an Anime Streaming Site with minimal UI and ad-free anime streaming experience.",
          images: [{ url: "/logo.png" }],
          siteName: "gojo-wtf-nextjs.vercel.app",
        }}
      />
      <Header />
      <HomeSlider data={trending} />
      {exist ? (
        <RecentlyWatched  data={recentData} />
      ) : null}
      <RecentAnime data={recent} />
      <TrendingAnime data={trending} />
      <PopularAnime data={popular} />
      <AllTimeFavourites data={favourites} />
      <Footer />
    </>
  );
}

export default Home;
