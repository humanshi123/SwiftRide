import React from 'react'
import { useState, useEffect } from 'react';
import AddVehicleMain from '../Components/AddVehicleMain';
const serviceAlerts = [
  {
    id: 1,
    serviceType: 'Oil Change',
    limitMileage: '5000 miles',
  },
  {
    id: 2,
    serviceType: 'Oil Change',
    limitMileage: '5000 miles',
  },
  {
    id: 3,
    serviceType: 'Oil Change',
    limitMileage: '5000 miles',
  },
  
];


export default function VehicleMaintenance() {
  const [showPopup, setShowPopup] = useState(false);
  const handleAddVehicle = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showPopup]);



  const displayServiceAlerts = serviceAlerts.map((alert) => (
    <tr key={alert.id}>
      <td>{alert.serviceType}</td>
      <td>{alert.limitMileage}</td>
    </tr>
  ));

  return (
    <div>
      <h1>Vehicle</h1>
   <div className="flex justify-between mb-8">
   <div className="w-[284px] relative">
        <label className="absolute top-4 left-4 text-[12px] text-[#8C909B]">Package:</label>
          <select className="w-full pl-[65px]" name="Package" id="packages">
            <option value="">All</option>
          </select> 
        </div>
        <div className="w-[170px]">
          <button className="w-full text-emerald-600 text-sm font-bold h-[48px]  bg-white rounded-xl border border-emerald-600"
           onClick={handleAddVehicle}> 
            Add New Vehicle
          </button>
        </div>
   </div>
      <div className='rounded-xl border-2 border-neutral-200'>
        <table className='service-alerts-table bg-white rounded-xl w-full text-center overflow-hidden'>
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Limit Mileage</th>
            </tr>
          </thead>
          <tbody>
            {displayServiceAlerts}
          </tbody>
        </table>
      </div>
<AddVehicleMain show={showPopup} onClose={handleClosePopup}/>

    </div>
  ) 
}
