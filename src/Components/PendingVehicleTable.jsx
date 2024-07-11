import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ReactPaginate from 'react-paginate'; 
import { Typography } from '@mui/material';
const PendingVehicle = [
    {
      id: 1,
      vin: '1HGCM82633A000001',
      startDate: '2023-09-14',
      make: 'Honda',
      model: 'Accord',
      color: 'Silver',
      year: '2020',
      PlateNumber: 'P4860189',
      PurchasePrice: '3324235',
      FirstName: 'Text', 
      LastName: 'Shree',
      package: 'Single Eco...',
      PackageID: '12',
    },
    {
        id: 2,
        vin: '1HGCM82633A000001',
        startDate: '2023-09-14',
        make: 'Honda',
        model: 'Accord',
        color: 'Silver',
        year: '2020',
        PlateNumber: 'P4860189',
        PurchasePrice: '3324235',
        FirstName: 'Text', 
        LastName: 'Shree',
        package: 'Single Eco...',
        PackageID: '12',
      },
      {
        id: 3,
        vin: '1HGCM82633A000001',
        startDate: '2023-09-14',
        make: 'Honda',
        model: 'Accord',
        color: 'Silver',
        year: '2020',
        PlateNumber: 'P4860189',
        PurchasePrice: '3324235',
        FirstName: 'Text', 
        LastName: 'Shree',
        package: 'Single Eco...',
        PackageID: '12',
      },
      {
        id: 4,
        vin: '1HGCM82633A000001',
        startDate: '2023-09-14',
        make: 'Honda',
        model: 'Accord',
        color: 'Silver',
        year: '2020',
        PlateNumber: 'P4860189',
        PurchasePrice: '3324235',
        FirstName: 'Text', 
        LastName: 'Shree',
        package: 'Single Eco...',
        PackageID: '12',
      },
      {
        id: 5,
        vin: '1HGCM82633A000001',
        startDate: '2023-09-14',
        make: 'Honda',
        model: 'Accord',
        color: 'Silver',
        year: '2020',
        PlateNumber: 'P4860189',
        PurchasePrice: '3324235',
        FirstName: 'Text', 
        LastName: 'Shree',
        package: 'Single Eco...',
        PackageID: '12',
      },
  ];

const PendingVehicleTable = () => {
  const [pageNumber, setPageNumber] = useState(0); // State to track current page

  const PendingVehiclePerPage = 8; // Number of service alerts per page
  const pagesVisited = pageNumber * PendingVehiclePerPage;


  // Display data for the current page
  const displayPendingVehicles = PendingVehicle
    .slice(pagesVisited, pagesVisited + PendingVehiclePerPage)
    .map((alert) => (
      <tr key={alert.id}>
        <td>{alert.vin}</td>
        <td>{alert.startDate}</td>
        <td>{alert.make}</td>
        <td>{alert.model}</td>
        <td>{alert.color}</td>
        <td>{alert.year}</td>
        <td>{alert.PlateNumber}</td>
        <td>{alert.PurchasePrice}</td>
        <td>{alert.FirstName}</td>
        <td>{alert.LastName}</td>
        <td>{alert.package}</td>
        <td>{alert.PackageID}</td>

      </tr>
    ));

  // Calculate number of pages
  const pageCount = Math.ceil(PendingVehicle.length / PendingVehiclePerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className=''>
      <div className='rounded-xl border-2 border-neutral-200'>
        <table className='service-alerts-table bg-white rounded-xl w-full text-center overflow-hidden'>
          <thead>
            <tr>
              <th>Vin</th>
              <th>Start Date</th>
              <th>Make</th>
              <th>Model</th>
              <th>Color</th>
              <th>Year</th>
              <th>Plate number</th>
              <th>Purchase price</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Package</th>
              <th>Package ID</th>
            </tr>
          </thead>
          <tbody>
            {displayPendingVehicles}
          </tbody>
        </table>
      </div>

      <div className="flex mt-6 mb-10 justify-between items-center">
        <Typography variant="body2" gutterBottom>
          Showing {pageNumber + 1} of {pageCount} pages
        </Typography>
        <div className='paginationnnnn'>
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
};

export default PendingVehicleTable;
