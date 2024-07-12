import React from 'react'
import { FilterIcon, SearchIcon } from './SvgIcons'

export default function SearchBar() {
  return (
    <div className='flex w-[50%] gap-[2px] items-center'>
      <div className='relative w-full max-width '>
        <input className='lato size-12 w-full h-12 pl-10 p-3 bg-white rounded-xl border-2 border-neutral-200'
          type="search" name="" id="" placeholder='Search by name or keyword' />
        <button className='absolute left-3 top-[14px]'>
    <SearchIcon/>
        </button>
      </div>
      <button className='p-[10px] bg-white rounded-xl border-2 border-neutral-200'>
      <FilterIcon/>
      </button>
    </div>
  )
}
