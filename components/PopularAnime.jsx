import React from 'react'
import Link from 'next/link'
import TrendingCard from './Cards/TrendingCard'

function PopularAnime({ data }) {
  return (
    <div className='px-[10.5rem] py-8'>
        <h1 className='text-3xl text-white font-bold'>Popular Anime</h1>
        <div className='flex flex-wrap gap-4'>
            {data.map((item, index) => {
                return (
                    <Link key={index} href={`/anime/detail/${item.id}`}>
                    <TrendingCard  data={item} />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default PopularAnime