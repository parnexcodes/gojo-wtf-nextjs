import React from "react";

function CharacterCard({ data }) {
  return (
      <div className="flex mt-6 max-w-[170px]">
        <div className="pb-2 bg-[#1f232c] rounded-md">
          <img
            className="h-[256px] hover:brightness-75 rounded-md"
            src={data.image}
            alt=""
          />
          <div className="flex flex-col pl-2 pt-1 pr-1 text-sm text-white">
            <span className="font-bold">{data.name.full != null ? data.name.full : data.name.userPreferred}</span>
            <span className="text-xs">{data.role}</span>
          </div>
        </div>
      </div>
  );
}

export default CharacterCard;
