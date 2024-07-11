import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Typography } from '@mui/material';

const vehicleStatusData = [
  {
    id: 1,
    imgURL: 'https://via.placeholder.com/150', 
    make: 'Toyota',
    model: 'Corolla',
    color: 'Red',
    year: 2020,
    vin: '1HGCM82633A123456',
    weeklyRate: '$100',
    stripeProduct: '',
    status: 'On the road',
    price: '$20,000',
    statusReason: 'Awaiting driver',
  },
  {
    id: 1,
    imgURL: 'https://via.placeholder.com/150', 
    make: 'Toyota',
    model: 'Corolla',
    color: 'Red',
    year: 2020,
    vin: '1HGCM82633A123456',
    weeklyRate: '$100',
    stripeProduct: '',
    status: 'option',
    price: '$20,000',
    statusReason: 'On the road',
  },
  {
    id: 1,
    imgURL: 'https://via.placeholder.com/150', 
    make: 'Toyota',
    model: 'Corolla',
    color: 'Red',
    year: 2020,
    vin: '1HGCM82633A123456',
    weeklyRate: '$100',
    stripeProduct: 'https://via.placeholder.com/150',
    status: 'On the road',
    price: '$20,000',
    statusReason: 'Inspection',
  },
  // Add more vehicle objects as needed
];
 
const VehicleStatusTable = () => {
  const [pageNumber, setPageNumber] = useState(0); // State to track current page

  const vehiclesPerPage = 8; // Number of vehicles per page
  const pagesVisited = pageNumber * vehiclesPerPage;

  // Display data for the current page
  const displayVehicles = vehicleStatusData
    .slice(pagesVisited, pagesVisited + vehiclesPerPage)
    .map((vehicle) => (
      <tr key={vehicle.id}>
        <td>
          {vehicle.imgURL ? (
            <img className='m-auto' src={vehicle.imgURL} alt={`${vehicle.make} ${vehicle.model}`} width="56" height="28" />
          ) : '-'}
        </td>
        <td>{vehicle.make}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.color}</td>
        <td>{vehicle.year}</td>
        <td>{vehicle.vin}</td>
        <td>{vehicle.weeklyRate}</td>
        <td>
        {vehicle.stripeProduct ? (
          <img className='m-auto' src={vehicle.stripeProduct} width="50" height="50" />
        ) : ''}
        </td>
        <td>{vehicle.status}</td>
        <td>{vehicle.price}</td>
        <td className={vehicle.statusReason === 'Awaiting driver' ? 'pending-class' : vehicle.statusReason === 'Inspection' ? 'inspection-class' : vehicle.statusReason === 'On the road' ? 'delivered-class' : ''}><span>{vehicle.statusReason}</span> </td>
    
      </tr>
    ));

  // Calculate number of pages
  const pageCount = Math.ceil(vehicleStatusData.length / vehiclesPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className='rounded-xl border-2 border-neutral-200'>
        <table className='investor-table bg-white rounded-xl w-full text-center overflow-hidden'>
          <thead>
            <tr>
              <th>IMG URL</th>
              <th>Make</th>
              <th>Model</th>
              <th>Color</th>
              <th>Year</th>
              <th>Vin</th>
              <th>Weekly Rate</th>
              <th>Stripe Product</th>
              <th>Status</th>
              <th>Price</th>
              <th>Status Reason</th>
            </tr>
          </thead>
          <tbody>
            {displayVehicles}
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

export default VehicleStatusTable;
