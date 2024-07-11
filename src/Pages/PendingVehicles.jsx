import React from 'react'
import PendingVehicleTable from '../Components/PendingVehicleTable'
import SearchBar from '../Components/SearchBar'

export default function PendingVehicles() {
  return (
    <div>
      <div className='mb-6 flex justify-between items-center'>
        <SearchBar />
        <div className='results lato text-[18px] font-bold flex justify-end colo-[1D3557]'>Results: 14</div>
      </div>
      <PendingVehicleTable />
    </div>
  )
}
