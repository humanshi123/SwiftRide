import React, { useState } from 'react';

const investorsData = [
  {

    transactionId: 'TXN001',
    investorID: 'INV001',
    firstName: 'John',
    lastName: 'Doe',
    transactionDate: 'Dec 12, 2023',
    estimatedDeliveryDate: 'Jan 23, 2024',
    actualDeliveryDate: 'Feb 21, 2024',
    status: 'delivered'
  },
  {

    transactionId: 'TXN002',
    investorID: 'INV002',
    firstName: 'Jane',
    lastName: 'Smith',
    transactionDate: 'Dec 12, 2023',
    estimatedDeliveryDate: 'Jan 23, 2024',
    actualDeliveryDate: 'Feb 21, 2024',
    status: 'pending'
  },
  {

    transactionId: 'TXN003',
    investorID: 'INV003',
    firstName: 'Alice',
    lastName: 'Johnson',
    transactionDate: 'Dec 12, 2023',
    estimatedDeliveryDate: 'Jan 23, 2024',
    actualDeliveryDate: 'Feb 21, 2024',
    status: 'delivered'
  },
  {
    transactionId: 'TXN004TXN004-TXN004-TXN004-TXN004',
    investorID: 'INV004',
    firstName: 'Bob',
    lastName: 'Brown',
    transactionDate: 'Dec 12, 2023',
    estimatedDeliveryDate: 'Jan 23, 2024',
    actualDeliveryDate: 'Feb 21, 2024',
    status: 'pending'
  },
  // Add more data as needed
];

const InvestorTable2 = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const investorsPerPage = 8; // Number of investors per page
  const pagesVisited = pageNumber * investorsPerPage;
  const displayInvestors = investorsData
    .slice(pagesVisited, pagesVisited + investorsPerPage)
    .map((inFlowLog) => (
      <tr key={inFlowLog.Id}>   
        <td><div className='trasnsactionid'>{inFlowLog.transactionId}</div></td>
        <td>{inFlowLog.investorID}</td>
        <td>{inFlowLog.firstName}</td>
        <td>{inFlowLog.lastName}</td>
        <td>{inFlowLog.transactionDate}</td>
        <td>{inFlowLog.estimatedDeliveryDate}</td>
        <td>{inFlowLog.actualDeliveryDate}</td> 
        <td className={inFlowLog.status === 'pending' ? 'pending-class' : inFlowLog.status === 'delivered' ? 'delivered-class' : ''}><span>{inFlowLog.status}</span></td>
      </tr>
    ));
  
  return (
    <div>
      <div className='rounded-xl border-2 border-neutral-200'>
        <table className=' bg-white rounded-xl w-full text-center overflow-hidden'>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Investor ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Transaction Date</th>
              <th>Estimated Delivery Date</th>
              <th>Actual Delivery Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayInvestors}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvestorTable2;
