import SearchBar from "../Components/SearchBar";
import { useState, useEffect } from "react";
import VehicleStatusTable from "../Components/VehicleStatusTable";
import AddVehiclePopup from "../Components/AddVehiclePopup"
export default function VehicleStatus() {
  const [showPopup, setShowPopup] = useState(false);
  const handleAddVehicleClick = () => {
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
  return (
    <div>
      <div className="searchhh mb-6 flex gap-4 items-center">
        <SearchBar />
        <div className="w-[30%] relative">
        <label className="absolute top-4 left-4 text-[12px] text-[#8C909B]">Package:</label>
          <select className="w-full pl-[65px]" name="Package" id="packages">
            <option value="">All</option>
          </select> 
        </div>
        <div className="w-[20%]">
          <button className="w-full text-emerald-600 text-sm font-bold h-[48px]  bg-white rounded-xl border border-emerald-600"
            onClick={handleAddVehicleClick}
            >
            Add New Vehicle
          </button>
        </div> 
      </div>
      <VehicleStatusTable />
      <AddVehiclePopup show={showPopup} onClose={handleClosePopup}/>
    </div>
  );
}
