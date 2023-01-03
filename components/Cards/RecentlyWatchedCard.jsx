import React from "react";

function RecentlyWatchedCard({ data }) {
  return (
    <div>
      <div className="flex mt-6 max-w-[180px]">
        <div className="pb-2 bg-[#1f232c] rounded-md">
          <img
            className="h-[256px] hover:brightness-75 rounded-md"
            src={data.image}
            alt=""
          />
          <div className="flex flex-col pl-2 pt-1 pr-1 text-sm text-white">
            <span className="font-bold">{data.title}</span>
            <span className="text-xs">Watched: {data.ep}/{data.totalep}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyWatchedCard;
