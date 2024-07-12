import React from "react";
import { useLocation, Link } from "react-router-dom";
import CustomCheckbox from "../Components/CustomCheckbox";

const PendingVehicleChange = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const vin = queryParams.get("vin");
  return (
    <>
      <div className="absolute top-[25px] flex gap-6 items-center">
        <button>
          <Link to="/PendingVehicles">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                d="M18.75 8L11.25 15.5L18.75 23"
                stroke="#353836"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </button>
        <p className="text-blue-950 text-[22px] font-bold font-[Lato]">
          Vin: {vin}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="left-grid">
          <p className="text-blue-950 text-[18px] font-bold font-[Lato] mb-3.5">
            Vin: {vin} Checklist
          </p>
          <div className="rounded-xl border-2 border-neutral-200">
            <table className="service-alerts-table bg-white rounded-xl w-full text-left overflow-hidden">
              <tbody>
                <tr>
                  <td>
                    <strong>Check type</strong>
                  </td>
                  <td>No information</td>
                </tr>
                <tr>
                  <td><strong>Check status</strong></td>
                  <td>No information</td>
                </tr>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>No information</td>
                </tr>
                <tr>
                  <td><strong>Details</strong></td>
                  <td>No information</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white border-2 border-neutral-200 mt-6 p-8 rounded-lg">
            <div className="flex justify-between items-center">
              <p>Vin:</p>
              <button className="w-[110px] text-emerald-600 text-xs font-bold h-[34px]  bg-white rounded-xl border border-emerald-600">
                Add New
              </button>
            </div>
            <div>
              <div className="">
                <div className="flex items-center justify-between mb-6"></div>
                <form>
                  <div className="wrap">
                    <div className=" mb-4">
                      <label className="block text-xs font-bold mb-1">
                        Check type
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full px-3 py-2 border rounded"
                      >
                        <option value="">Select an option</option>
                        <option value="">option1</option>
                        <option value="">option2</option>
                      </select>
                    </div>
                    <div className=" mb-4">
                      <label className="block text-xs font-bold mb-1">
                        Cost
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full px-3 py-2 border rounded"
                      >
                        <option value="">Select an option</option>
                        <option value="">option1</option>
                        <option value="">option2</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-bold mb-1">
                        Details
                      </label>
                      <select
                        name=""
                        id=""
                        className="w-full px-3 py-2 border rounded"
                      >
                        <option value="">Select an option</option>
                        <option value="">option1</option>
                        <option value="">option2</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <button className=" w-full px-4 h-12 py-2 bg-emerald-600 text-white rounded">
                        Submit
                      </button>
                      <button className="px-4 w-full h-12 mt-3.5 py-2  bg-[#EAEAEA] text-[#9E9E9E] rounded">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="right-grid">
          <div>
            <div className="bg-white p-7 rounded-lg  border-2 border-gray-200">
              <h2 className="text-[18px] font-[lato] font-bold border-b border-gray-200 mb-4 pb-4">
                Pending Delay Reason
              </h2>

              <form>
                <div className="wrap">
                  <div className="mb-4">
                    <label className="block text-xs font-bold mb-1">
                      Reason
                    </label>
                    <input
                      className="h-[54px] w-full px-3 py-2 border rounded"
                      type="number"
                      placeholder="On the road"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-bold mb-1">
                      Admin Signature
                    </label>
                    <input
                      className="h-[54px] w-full px-3 py-2 border rounded"
                      type="number"
                      placeholder="Enter value"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <button className="px-4 py-2 h-12 bg-[#EAEAEA] text-[#9E9E9E] rounded">
                      Cancel
                    </button>
                    <button className="px-4 py-2 h-12 bg-emerald-600 text-white rounded">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white p-7 rounded-lg  border-2 border-gray-200 mt-6">
          <div className="max-w-[311px] text-blue-950 text-lg font-bold font-['Lato']">Please complete the checklist to send the vehicle to InActive</div>
          <div className="mt-6">
            <CustomCheckbox label="Maintenance done"/>
            <CustomCheckbox label="Interior and exterior elecrical  "/>
            <CustomCheckbox label="No dash lights"/>
            <CustomCheckbox label="Tracker and Keyless installed "/>
            <CustomCheckbox label="Company Decal Applied "/>
            <CustomCheckbox label="Emissions performed "/>
            <CustomCheckbox label="Added to insurance "/>

          </div>
          <button className="px-4 w-full h-12 mt-3.5 py-2  bg-[#EAEAEA] text-[#9E9E9E] rounded">
          Send the vehicle to InActive
                      </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingVehicleChange;
