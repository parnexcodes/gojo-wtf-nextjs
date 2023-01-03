import React from 'react'

function TrendingCard({ data }) {
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
          <span className="font-bold">{data.title.english != null ? data.title.english : data.title.romaji}</span>
          <span className="text-xs pt-1">{data.status}</span>
          <div className='flex justify-between text-xs'>
          <span>{data.releaseDate != null ? data.releaseDate : "Ep: " + data.episodes}</span>
          <span>{data.type}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TrendingCard