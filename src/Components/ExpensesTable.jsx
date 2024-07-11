import { useState } from 'react';
import { Typography } from '@mui/material';
import ReactPaginate from 'react-paginate';

const ExpensesTable = () => {
    const [pageNumber, setPageNumber] = useState(0);
  // Sample data for expenses
  const expensesData = [
    {
      id: 1,
      expenseDate: '2024-01-01',
      transactionDate: '2024-01-02',
      firstName: 'John',
      lastName: 'Doe',
      invoiceNumber: 'INV12345',
      vin: '1HGCM82633A123456',
      total: '$100.00',
      mileage: '5000',
      investorId: 1,
      category: '',
    },
    {
        id: 2,
        expenseDate: '2024-01-01',
        transactionDate: '2024-01-02',
        firstName: 'John',
        lastName: 'Doe',
        invoiceNumber: 'INV12345',
        vin: '1HGCM82633A123456',
        total: '$100.00',
        mileage: '5000',
        investorId: 1,
        category: '',
      },
      {
        id: 3,
        expenseDate: '2024-01-01',
        transactionDate: '2024-01-02',
        firstName: 'John',
        lastName: 'Doe',
        invoiceNumber: 'INV12345',
        vin: '1HGCM82633A123456',
        total: '$100.00',
        mileage: '5000',
        investorId: 1,
        category: '',
      },
      {
        id: 4,
        expenseDate: '2024-01-01',
        transactionDate: '2024-01-02',
        firstName: 'John',
        lastName: 'Doe',
        invoiceNumber: 'INV12345',
        vin: '1HGCM82633A123456',
        total: '$100.00',
        mileage: '5000',
        investorId: 1,
        category: '',
      },
  ];

  
  const expensesPerPage = 8; // Number of expenses per page
  const pagesVisited = pageNumber * expensesPerPage;

  // Display data for the current page
  const displayExpenses = expensesData
    .slice(pagesVisited, pagesVisited + expensesPerPage)
    .map((expense) => (
      <tr key={expense.id}>
        <td>{expense.expenseDate}</td>
        <td>{expense.transactionDate}</td>
        <td>{expense.firstName}</td>
        <td>{expense.lastName}</td>
        <td>{expense.invoiceNumber}</td>
        <td>{expense.vin}</td>
        <td>{expense.total}</td>
        <td>{expense.mileage}</td>
        <td>{expense.investorId}</td>
        <td>{expense.category}</td>
      </tr>
    ));

  // Calculate number of pages
  const pageCount = Math.ceil(expensesData.length / expensesPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className=''>
      <div className='rounded-xl border-2 border-neutral-200'>
        <table className='expenses-table bg-white rounded-xl w-full text-center overflow-hidden'>
          <thead>
            <tr>
              <th>Expense Date</th>
              <th>Transaction Date</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Invoice Number</th>
              <th>VIN</th>
              <th>Total</th>
              <th>Mileage</th>
              <th>Investor ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {displayExpenses}
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

export default ExpensesTable;