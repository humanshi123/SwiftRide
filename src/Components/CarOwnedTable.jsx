import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Typography } from '@mui/material';

// Sample data (replace with your actual data)
const carOwnedData = [
  {
    id: 1,
    color: 'Red',
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    breakeven: '$25,000',
    vin: '1234567890',
    investAmount: '$20,000',
  },
  {
    id: 2,
    color: 'Blue',
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    breakeven: '$22,000',
    vin: '0987654321',
    investAmount: '$18,000',
  },
  // Add more car objects as needed
];

const CarOwnedTable = () => {
  const [pageNumber, setPageNumber] = useState(0); // State to track current page
  const carsPerPage = 5; // Number of cars per page
  const pagesVisited = pageNumber * carsPerPage;

  // Display data for the current page
  const displayCars = carOwnedData
    .slice(pagesVisited, pagesVisited + carsPerPage)
    .map((car) => (
      <tr key={car.id}>
        <td>{car.color}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.breakeven}</td>
        <td>{car.vin}</td>
        <td>{car.investAmount}</td>
      </tr>
    ));


  return (
    <div>
      <Typography variant="body2" gutterBottom>
         {carOwnedData.length} Results
      </Typography>
      <div className='rounded-xl border-2 border-neutral-200'>
      <table className='investor-table bg-white rounded-xl w-full text-center  overflow-hidden'> 
        <thead>
          <tr>
            <th>Color</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Breakeven</th>
            <th>VIN</th>
            <th>Invest Amount</th>
          </tr>
        </thead>
        <tbody>
          {displayCars}
        </tbody>
      </table>
     </div>

    </div>
  );
};

export default CarOwnedTable;
