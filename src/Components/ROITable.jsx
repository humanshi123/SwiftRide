import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Typography } from '@mui/material';
const ROITable = () => {
    const RoiTableData = [
        {
          id: 1,
          investodId: 2552,
          vin: '1234567890',
          make: 'Toyota',
          color: 'Red',
          model: 'Camry',
          year: 2020,
          activeDays: 20,
          downdays: 12,
          totalExpense: '$20,000',
          totlProfit: '$256',
          reportGenerateddate: 'Mar 25, 2024',
          uid: 125,
          firstName: 'John',
          lastName: 'Doe',
          subtractedProfit: '-1736',
        },
        {
            id: 2,
            investodId: 2552,
            vin: '1234567890',
            make: 'Toyota',
            color: 'Red',
            model: 'Camry',
            year: 2020,
            activeDays: 20,
            downdays: 12,
            totalExpense: '$20,000',
            totlProfit: '$256',
            reportGenerateddate: 'Mar 25, 2024',
            uid: 125,
            firstName: 'John',
            lastName: 'Doe',
            subtractedProfit: '-1736',
          },
          {
            id: 3,
            investodId: 2552,
            vin: '1234567890',
            make: 'Toyota',
            color: 'Red',
            model: 'Camry',
            year: 2020,
            activeDays: 20,
            downdays: 12,
            totalExpense: '$20,000',
            totlProfit: '$256',
            reportGenerateddate: 'Mar 25, 2024',
            uid: 125,
            firstName: 'John',
            lastName: 'Doe',
            subtractedProfit: '-1736',
          },
      ];
      const [pageNumber, setPageNumber] = useState(0); // State to track current page
      const RoiDataPerPage = 4; // Number of cars per page
      const pagesVisited = pageNumber * RoiDataPerPage;

      const displayCars = RoiTableData
      .slice(pagesVisited, pagesVisited + RoiDataPerPage)
      .map((roidata) => (
        <tr key={roidata.id}>
          <td>{roidata.investodId}</td>
          <td>{roidata.vin}</td>
          <td>{roidata.make}</td>
          <td>{roidata.color}</td>
          <td>{roidata.model}</td>
          <td>{roidata.year}</td>
          <td>{roidata.activeDays}</td>
          <td>{roidata.downdays}</td>
          <td>{roidata.totalExpense}</td>
          <td>{roidata.totlProfit}</td>
          <td>{roidata.reportGenerateddate}</td>
          <td>{roidata.uid}</td>
          <td>{roidata.firstName}</td>
          <td>{roidata.lastName}</td>
          <td>{roidata.subtractedProfit}</td>
        </tr>
      ));
  
    // Calculate number of pages
    const pageCount = Math.ceil(RoiTableData.length / RoiDataPerPage);
  
    // Handle page change
    const handlePageChange = ({ selected }) => {
      setPageNumber(selected);
    };
    return (
        <div>
                  <div className='rounded-xl border-2 border-neutral-200'>
      <table className='investor-table bg-white rounded-xl w-full text-center  overflow-hidden'> 
        <thead>
          <tr>
            <th>Investor ID</th>
            <th>VIN</th>
            <th>Make</th>
            <th>Color</th>
            <th>Model</th>
            <th>Year</th>
            <th>Active Days</th>
            <th>Down Days</th>
            <th>Total Expences</th>
            <th>Total Profit</th>
            <th>Report Generated date</th>
            <th>UID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Subtracted profit</th>
          </tr>
        </thead>
        <tbody>
          {displayCars}
        </tbody>
      </table>
     </div>



            <div className="flex mt-6 mb-10 justify-between items-center">
      <Typography variant="body2" gutterBottom>
        Showing {pageNumber + 1} of {pageCount} pages
      </Typography>
      <div className='paginationnnnn '>
      {pagesVisited >= 0 && (
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          pageCount={pageCount}
          pageRangeDisplayed={4}
           breakLabel="..."
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
      </div>
      </div>
        </div>
    );
}

export default ROITable;
