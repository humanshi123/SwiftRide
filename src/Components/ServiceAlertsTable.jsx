import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import ReactPaginate from 'react-paginate'; // Assuming you have installed this package
import { Typography } from '@mui/material';

const ServiceAlertsTable = () => {
  const [pageNumber, setPageNumber] = useState(0); // State to track current page

  const serviceAlertsPerPage = 8; // Number of service alerts per page
  const pagesVisited = pageNumber * serviceAlertsPerPage;

  const serviceAlerts = [
    {
      id: 1,
      make: 'Honda',
      model: 'Accord',
      color: 'Silver',
      vin: '1HGCM82633A000001',
      serviceCategory: 'Oil Change',
      serviceDue: '2023-08-15',
    },
    {
        id: 2,
        make: 'Nissan',
        model: 'Accord',
        color: 'Silver',
        vin: '1HGCM82633A000001',
        serviceCategory: 'Oil Change',
        serviceDue: '2023-08-15',
      },
      {
        id: 3,
        make: 'Tata',
        model: 'Accord',
        color: 'Silver',
        vin: '1HGCM82633A000001',
        serviceCategory: 'Oil Change',
        serviceDue: '2023-08-15',
      },
  ];

  // Display data for the current page
  const displayServiceAlerts = serviceAlerts
    .slice(pagesVisited, pagesVisited + serviceAlertsPerPage)
    .map((alert) => (
      <tr key={alert.id}>
        <td>{alert.make}</td>
        <td>{alert.model}</td>
        <td>{alert.color}</td>
        <td>{alert.vin}</td>
        <td>{alert.serviceCategory}</td>
        <td>{alert.serviceDue}</td>
        
      </tr>
    ));

  // Calculate number of pages
  const pageCount = Math.ceil(serviceAlerts.length / serviceAlertsPerPage);

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
              <th>Make</th>
              <th>Model</th>
              <th>Color</th>
              <th>VIN</th>
              <th>Service Category</th>
              <th>Service Due</th>
            </tr>
          </thead>
          <tbody>
            {displayServiceAlerts}
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

export default ServiceAlertsTable;
