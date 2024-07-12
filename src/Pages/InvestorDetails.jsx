import React from 'react';
import Edit from '../assets/edit.svg'
import ReportYearAndDateRange from '../Components/ReportYearAndDateRange';
import InvestorDetailGraph from '../Components/InvestorDetailGraph';
import CloseIcon from '../Components/CloseIcon'
import SearchBar from '../Components/SearchBar'
import CarOwnedTable from '../Components/CarOwnedTable';
import ROITable from '../Components/ROITable';
import ExpenseDetailTable from '../Components/ExpenseDetailTable';
import { useLocation, Link } from 'react-router-dom';
import { DownloadIcon, PageBackIcon } from '../Components/SvgIcons';

const InvestorDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');
  const lastName = queryParams.get('lastName');
  return (
    <>
   <div className='absolute top-[25px] flex gap-6 items-center'>
    <button>
      <Link to='/investors'>
<PageBackIcon/>
       </Link>
    </button>
   <p className='text-blue-950 text-[22px] font-bold font-[Lato]'>Investor details:{firstName} {lastName} </p>
   </div>
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
    <DownloadIcon/>

          </button>
        </div> 
      </div>
     <ROITable />
    <ExpenseDetailTable />
    </>
  );
};

export default InvestorDetails;
