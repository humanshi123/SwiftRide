import React from 'react';
import Edit from '../assets/edit.svg'
import ReportYearAndDateRange from '../Components/ReportYearAndDateRange';

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
    </>
  );
};

export default InvestorDetails;
