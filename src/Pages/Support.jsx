import React from 'react'
import ChatScreen from '../Components/ChatScreen'
import SearchBar from '../Components/SearchBar'

export default function Support() {
  return (
    <>
      <div className="searchhh mb-6 flex justify-between items-center">
      <h2 className="lato text-blue-950 text-lg font-bold">List of invesrors</h2>
      <SearchBar />
    </div>
    <div className='flex rounded-xl border-2 border-neutral-200 p-5 pb-0 min-h-[500px] bg-white overflow-hidden'>
      
      <ChatScreen/>
    </div>
    </>
  )
}
