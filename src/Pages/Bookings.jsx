import React from 'react'
import SearchBar from '../Components/SearchBar'
import BookingsTable from '../Components/BookingsTable'



export default function Bookings() {
  return (
    <>
      <div className="searchhh signup-search mb-6 grid grid-cols-2 items-center">
         <SearchBar />
         <div className='results lato text-[18px] font-bold flex justify-end colo-[1D3557]'>Results: 445</div>
      </div>
      <BookingsTable />
    </>
  )
}
