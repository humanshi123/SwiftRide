import React from 'react';
import Edit from '../assets/edit.svg'
import ReportYearAndDateRange from '../Components/ReportYearAndDateRange';
import InvestorDetailGraph from '../Components/InvestorDetailGraph';
import CloseIcon from '../Components/CloseIcon'
import SearchBar from '../Components/SearchBar'
import CarOwnedTable from '../Components/CarOwnedTable';
import ROITable from '../Components/ROITable';
import ExpenseDetailTable from '../Components/ExpenseDetailTable';

const InvestorDetails = () => {

  return (
    <>
       <div className='box-card p-[24px] bg-[#fff] border-2 border-solid border-[#EDEDED] rounded-xl'>
          <div className='box-card-header  flex justify-between align-center pb-[20px] mb-[20px] gap-[20px] border-b border-solid border-[#E2E2E2]'> 
              <h4 className='lato text-[18px] font-bold'>Information</h4>
              <button><img src={Edit} alt="Edit" /></button>
          </div>
          <div className='infromation-list'>
             <div className='infromation-inner'>
                <h6>Name:</h6>
                 <p>Adam</p>
             </div>
             <div className='infromation-inner'>
                <h6>Number of cars:</h6>
                 <p>2   </p>
             </div>
             <div className='infromation-inner'>
                <h6>Total Invested:</h6>
                 <p>0.00</p>
             </div>
             <div className='infromation-inner'>
                <h6>Pending Cars:</h6>
                 <p>0</p>
             </div>
             <div className='infromation-inner'>
                <h6>Percent returns to date:</h6>
                 <p>Infinity %</p>
             </div>
          </div>
       </div>
       <ReportYearAndDateRange /> 
       <div className=" graphand-stats">
       <div className=" investor-stats">
         <div className='flex items-center justify-between border-b mb-8 pb-5 border-neutral-200'>
         <div className='flex items-center justify-start gap-4'>
            <p className='text-emerald-600 text-xs font-semibold leading-[18px] px-2.5 py-1.5 bg-[#D8ECE5] rounded-lg'>investment</p>
            <p className="text-gray-600 text-xs font-medium font-['Rubik'] leading-[18px]">S&P 500</p>
            </div>
            <CloseIcon />
            
         </div>
       <InvestorDetailGraph />
       </div>
       <div className="box">
       <div className="w-full h-full p-6 bg-white rounded-xl border border-gray-200 flex-col justify-center items-center gap-6 inline-flex">
  <div className="text-blue-950 text-xl font-bold font-['Lato']">Statistics</div>
  <div className="self-stretch h-px bg-neutral-200 border border-neutral-200" />
  <div className="flex-col justify-start items-center gap-3.5 flex">
    <div className="text-blue-950 text-lg font-medium  leading-[27px]">Return on Investment</div>
    <div className="justify-center items-center gap-2 inline-flex">
      <div className="relative" />
      <div className='flex gap-2 items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="3" viewBox="0 0 35 3" fill="none">
  <path d="M2 1.5L33 1.5" stroke="#1D3557" strokeWidth="3" strokeLinecap="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="43" viewBox="0 0 51 43" fill="none">
  <path d="M25.5 21.5C22.3125 26.75 20.743 30.25 14.875 30.25C9.00697 30.25 4.25 26.3325 4.25 21.5C4.25 16.6675 9.00697 12.75 14.875 12.75C16.2855 12.75 17.6318 12.9764 18.8633 13.3874C20.5095 13.9368 21.7212 15.2744 22.6218 16.7579C24.7132 20.203 26.2877 22.7967 28.3791 26.2417C29.2798 27.7254 30.4917 29.0633 32.1381 29.6128C33.3692 30.0237 34.7149 30.25 36.125 30.25C41.993 30.25 46.75 26.3325 46.75 21.5C46.75 16.6675 41.993 12.75 36.125 12.75C30.257 12.75 28.6875 16.25 25.5 21.5Z" stroke="#1D3557" strokeWidth="3" strokeLinecap="round"/>
</svg>
      <p className="text-blue-950 text-[28px] font-bold font-['Lato']">%</p>
         </div>
    </div>
    <div className="opacity-50 text-gray-600 text-sm font-normal font-['Rubik'] leading-[21px]">For May 24, 2024 - Apr 24, 2024</div>
  </div>
  <div className="w-[287px] h-px bg-neutral-200 border border-neutral-200" />
  <div className="flex-col justify-start items-center gap-3.5 flex">
    <div className="text-blue-950 text-lg font-medium leading-[27px]">Total Miles Driven</div>
    <div className="justify-center items-center gap-2 inline-flex">
      <div className="text-blue-950 text-[28px] font-bold font-['Lato']">0</div>
    </div>
    <div className="opacity-50 text-gray-600 text-sm leading-[21px]">For May 24, 2024 - Apr 24, 2024</div>
  </div>
</div>
       </div>
       </div>
       <CarOwnedTable />
       <div className="searchhh justify-between my-7 flex gap-4 items-center">
         <h2 className='text-blue-950 text-lg font-bold'>ROI Reports</h2>
        <SearchBar className="w-[40%]"/>
        <div className="w-[20%] relative">
        <label className="absolute top-4 left-4 text-[12px] text-[#8C909B]">Package:</label>
          <select className="w-full pl-[65px]" name="Package" id="packages">
            <option value="">All</option>
          </select> 
        </div>
        <div className="w-[15%]">
          <button className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-sm font-bold h-[48px]  text-white rounded-xl border border-emerald-600">
            Export to PDF
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1667 13.833C18.9457 13.833 18.7337 13.9208 18.5774 14.0771C18.4211 14.2334 18.3333 14.4453 18.3333 14.6663V17.9997C18.3333 18.2207 18.2455 18.4326 18.0893 18.5889C17.933 18.7452 17.721 18.833 17.5 18.833H2.5C2.27899 18.833 2.06702 18.7452 1.91074 18.5889C1.75446 18.4326 1.66667 18.2207 1.66667 17.9997V14.6663C1.66667 14.4453 1.57887 14.2334 1.42259 14.0771C1.26631 13.9208 1.05435 13.833 0.833333 13.833C0.61232 13.833 0.400358 13.9208 0.244078 14.0771C0.0877974 14.2334 0 14.4453 0 14.6663V17.9997C0 18.6627 0.263392 19.2986 0.732233 19.7674C1.20107 20.2363 1.83696 20.4997 2.5 20.4997H17.5C18.163 20.4997 18.7989 20.2363 19.2678 19.7674C19.7366 19.2986 20 18.6627 20 17.9997V14.6663C20 14.4453 19.9122 14.2334 19.7559 14.0771C19.5996 13.9208 19.3877 13.833 19.1667 13.833Z" fill="white"/>
<path d="M8.23169 15.6017C8.46386 15.834 8.73953 16.0183 9.04295 16.144C9.34636 16.2698 9.67159 16.3345 10 16.3345C10.3285 16.3345 10.6537 16.2698 10.9571 16.144C11.2605 16.0183 11.5362 15.834 11.7684 15.6017L14.4442 12.9258C14.5877 12.7672 14.6646 12.5594 14.6591 12.3455C14.6536 12.1317 14.5661 11.9282 14.4147 11.7771C14.2633 11.626 14.0595 11.5389 13.8457 11.5338C13.6318 11.5288 13.4242 11.6062 13.2659 11.75L10.8275 14.1892L10.8334 1.33333C10.8334 1.11232 10.7456 0.900358 10.5893 0.744078C10.433 0.587797 10.221 0.5 10 0.5C9.77901 0.5 9.56705 0.587797 9.41077 0.744078C9.25449 0.900358 9.16669 1.11232 9.16669 1.33333L9.15919 14.1733L6.73419 11.75C6.57783 11.5937 6.36579 11.506 6.14473 11.5061C5.92367 11.5062 5.7117 11.5941 5.55544 11.7504C5.39919 11.9068 5.31145 12.1188 5.31152 12.3399C5.3116 12.5609 5.39949 12.7729 5.55586 12.9292L8.23169 15.6017Z" fill="white"/>
</svg>

          </button>
        </div> 
      </div>
     <ROITable />
    <ExpenseDetailTable />
    </>
  );
};

export default InvestorDetails;
