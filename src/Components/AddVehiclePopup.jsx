import React from 'react';
import { useState } from 'react';
import CloseIcon from './CloseIcon';

const AddVehiclePopup = ({ show, onClose }) => {
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPreviewImage(e.target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
          setImage(e.target.files[0]);
        }
      };
      const handleRemoveImage = () => {
        setImage(null);
        setPreviewImage(null);
      };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 py-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-[90%] w-full overflow-y-scroll h-[90vh]">
   <div className='flex items-center justify-between mb-6'>
   <h2 className="text-[18px] font-[lato] font-bold">Add Vehicle</h2>
   <button className="" onClick={onClose}><CloseIcon/> </button>
   </div> 
        <form>
<div className='form-wrap'>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Make *</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter make" />
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Model *</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter model" />
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Color *</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter color" />
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Vin *</label>
            <input className="w-full px-3 py-2 border rounded" type="number" placeholder="Enter year" />
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Plate number *</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter vin" />
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Year *</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter weekly rate" />
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Investor ID *</label>
            <select name="" id="" className="w-full px-3 py-2 border rounded">
            <option value="">Select an option</option>
            <option value="">option1</option>
            <option value="">option2</option>
           </select>
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Status *</label>
            <select name="" id="" className="w-full px-3 py-2 border rounded">
            <option value="">Select an option</option>
            <option value="">option1</option>
            <option value="">option2</option>
           </select>
          </div>
          <div className="flex-item mb-4">
            <label className="block text-xs font-bold mb-1">Purchase Price</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="Enter vin" />
          </div>
          <div className="flex-item items-two mb-4">
            <label className="block text-xs font-bold mb-1">Status reason</label>
           <select name="" id="" className="w-full px-3 py-2 border rounded">
            <option value="">Select an option</option>
            <option value="">option1</option>
            <option value="">option2</option>
           </select>
          </div>
          <div className="flex-item items-two mb-4">
            <label className="block text-xs font-bold mb-1">Weekly Rate *</label>
            <input className="w-full px-3 py-2 border rounded" type="text" placeholder="0" />
          </div>
          <div className="image-upload w-full  mb-4">
            <label className="block text-xs font-bold mb-1">Image *</label>
           <div className='relative grid place-items-center border-dashed border-[1px] rounded-lg border-[#919eab33] bg-[#919eab14] py-4'>
           <input
           className='absolute top-0 left-0 h-full w-full opacity-0'
              type="file"   
              accept="image/*"
              onChange={handleImageChange}
            />
           {previewImage ? (
              <div className="mt-4 relative">
                <img src={previewImage} alt="Preview" className="max-w-[300px] h-auto" />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-[#EAEAEA] px-2 rounded-full"
                  onClick={handleRemoveImage}
                >
                  X
                </button>
              </div>
            ) : (
              <div className="text-center mt-4">
                <img src="/public/illustration_upload.png" alt="Placeholder" className="mx-auto" />
                <p className='text-gray-800 text-base font-semibold leading-7 mt-6'>Select file</p>
                <p className='text-gray-500 text-xs mt-2'>Drop file here or click <span className='text-[#00A76F]'>browse</span> thorough your machine</p>
              </div>
            )}
           </div>
          </div>
        </div>
          <div className="grid grid-cols-2">
          <button className="px-4 py-2  bg-[#EAEAEA] text-[#9E9E9E] rounded mr-2" onClick={onClose}>Cancel</button>
            <button className="px-4 py-2 bg-emerald-600 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehiclePopup;
