import React from 'react'
import { useState } from 'react';
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
    },
];

const InvestorTable2 = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const investorsPerPage = 8; // Number of investors per page
    const pagesVisited = pageNumber * investorsPerPage;
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
        <td>
          imgg
        </td>
      </tr>
    ));
    return (
        <div>
            <div>
          <div className='rounded-xl border-2 border-neutral-200'>
      <table className='investor-table bg-white rounded-xl w-full text-center  overflow-hidden'> 
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Investor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Transaction date</th>
            <th>Estimated delivery date</th>
            <th>Actual delivery date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayInvestors}
        </tbody>
      </table>
      </div>
    </div>
        </div>
    );
}

export default InvestorTable2;