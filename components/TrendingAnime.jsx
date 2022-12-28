import React from 'react'
import Link from 'next/link'

import TrendingCard from './Cards/TrendingCard'

function TrendingAnime({ data }) {
  return (
    <div className='px-[10.5rem] py-8'>
        <h1 className='text-3xl text-white font-bold'>Trending Anime</h1>
        <div className='flex flex-wrap gap-4'>
            {data.map((item, index) => {
                return (
                    <Link href={`/anime/detail/${item.id}`}>
                    <TrendingCard key={index} data={item} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default TrendingAnime