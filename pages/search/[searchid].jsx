import Link from "next/link";
import React from "react";
import Header from "../../components/Header";
import TrendingCard from "../../components/Cards/TrendingCard";

export async function getServerSideProps(context) {
  let { searchid } = context.params;
  const req = await fetch(
    `https://gojo-api.onrender.com/meta/anilist/${searchid}`
  );
  const res = await req.json();
  return {
    props: { data: res.results }, // will be passed to the page component as props
  };
}

function SearchPage(props) {
  let { data } = props;
  return (
    <div className="min-h-screen bg-[#282C37]">
      <Header />
      <div className="md:px-40 px-4 py-8 bg-[#181B22]">
        {/* <div className="flex justify-between">
          <h1 className="text-white font-semibold text-4xl pl-8">Trending</h1>
          <a className="text-white text-sm pr-12" href="">
            View all
          </a>
        </div> */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {data && data
            ? data.map((item, index) => {
                    return (
                        <Link href={`/anime/detail/${item.id}`} key={index}>
                        <TrendingCard data={item} index={item.id} />
                      </Link>
                    )
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;