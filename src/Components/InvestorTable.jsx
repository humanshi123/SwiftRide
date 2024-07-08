import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Sample data (replace with your actual data)
const investorsData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+1234567890',
    email: 'john.doe@example.com',
    carsOwned: 2,
    investmentAmount: '$10,000',
    investmentDate: '2023-07-08',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 3,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 4,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 5,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 6,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 7,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 8,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 9,
    firstName: 'Jane',
    lastName: 'Smith',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  {
    id: 10,
    firstName: 'Humanshi',
    lastName: 'Jangra',
    phoneNumber: '+1987654321',
    email: 'jane.smith@example.com',
    carsOwned: 1,
    investmentAmount: '$5,000',
    investmentDate: '2023-06-15',
    investorImage: 'https://via.placeholder.com/150', // Example image URL
  },
  
];

const InvestorTable = () => {
  const [pageNumber, setPageNumber] = useState(0); // State to track current page

  const investorsPerPage = 8; // Number of investors per page
  const pagesVisited = pageNumber * investorsPerPage;

  // Display data for the current page
  const displayInvestors = investorsData
    .slice(pagesVisited, pagesVisited + investorsPerPage)
    .map((investor) => (
      <tr key={investor.id}>
        <td>{investor.id}</td>
        <td>{investor.firstName}</td>
        <td>{investor.lastName}</td>
        <td>{investor.phoneNumber}</td>
        <td>{investor.email}</td>
        <td>{investor.carsOwned}</td>
        <td>{investor.investmentAmount}</td>
        <td>{investor.investmentDate}</td>
        <td>
          imgg
        </td>
      </tr>
    ));

  // Calculate number of pages
  const pageCount = Math.ceil(investorsData.length / investorsPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className=''>
    <div className='rounded-xl border-2 border-neutral-200'>
      <table className='investor-table bg-white rounded-xl w-full text-center  overflow-hidden'> 
        <thead>
          <tr>
            <th>Investor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Cars Owned</th>
            <th>Investment Amount</th>
            <th>Investment Date</th>
            <th>Investor Image</th>
          </tr>
        </thead>
        <tbody>
          {displayInvestors}
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
};

export default InvestorTable;
