import React from 'react';
import CloseIcon from './CloseIcon';

const AddVehicleMain = ({ show, onClose }) => {

    if (!show) {
        return null;
      }
    return (
        <div>
              <div className="fixed inset-0 py-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-[449px] w-full overflow-y-scroll h-[90vh]">
   <div className='flex items-center justify-between mb-6'>
   <h2 className="text-[18px] font-[lato] font-bold">Add Vehicle</h2>
   <button className="" onClick={onClose}><CloseIcon/> </button>
   </div> 
        <form>
        <div className='wrap'>
        <div className=" mb-4">
            <label className="block text-xs font-bold mb-1">Investor ID *</label>
            <select name="" id="" className="w-full px-3 py-2 border rounded">
            <option value="">Select an option</option>
            <option value="">option1</option>
            <option value="">option2</option>
           </select>
          </div>
          <div className=" mb-4">
            <label className="block text-xs font-bold mb-1">Status *</label>
            <select name="" id="" className="w-full px-3 py-2 border rounded">
            <option value="">Select an option</option>
            <option value="">option1</option>
            <option value="">option2</option>
           </select>
          </div>
         <div className='w-full'>
         <button className=" w-full px-4 py-2 bg-emerald-600 text-white rounded">Submit</button>
         </div>
        </div>
        </form>
        </div>
        </div>
        </div>
    );
}

export default AddVehicleMain;
