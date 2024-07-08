
import { useState } from "react";
import InvestorTable from "../Components/InvestorTable";
import SearchBar from "../Components/SearchBar";
import InvestorTable2 from "../Components/InvestorTable2"

export default function Investor() {


  return (
    <>
    <div className="searchhh mb-6 grid grid-cols-2 items-center">
      <h1 className="text-blue-950 text-lg font-bold">List of invesrors</h1>
      <SearchBar />
    </div>
      <div className='dashboard'>

     <InvestorTable />
     <InvestorTable2 />
      </div>
    </>
  );
}
