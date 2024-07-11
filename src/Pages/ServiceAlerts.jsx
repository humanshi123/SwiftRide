import React from 'react'
import ServiceAlertsTable from '../Components/ServiceAlertsTable'
import SearchBar from '../Components/SearchBar'

export default function ServiceAlerts() {
  return (
    <div>
      <div className='mb-6 searchhh flex gap-4 items-center'>
        <SearchBar />
        <div className="w-[30%] relative">
        <label className="absolute top-4 left-4 text-[12px] text-[#8C909B]">Package:</label>
          <select className="w-full pl-[65px]" name="Package" id="packages">
            <option value="">All</option>
          </select>
        </div>
      </div>
      <ServiceAlertsTable />
    </div>
  )
}
