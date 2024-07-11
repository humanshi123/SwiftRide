
import { useState } from "react";
import InvestorTable from "../Components/InvestorTable";
import SearchBar from "../Components/SearchBar";
import InvestorTable2 from "../Components/InvestorTable2"

export default function Investor() {


  return (
    <>
    <div className="searchhh mb-6 flex justify-between items-center">
      <h2 className="lato text-blue-950 text-lg font-bold">List of invesrors</h2>
      <SearchBar />
    </div>
      <div className='dashboard'>

     <InvestorTable />
     
     <h2 className="lato text-blue-950 text-lg font-bold mb-4 mt-">In-flow Log</h2>
     <InvestorTable2 />
      </div>
    </>
  );
}
