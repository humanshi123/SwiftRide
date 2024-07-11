import { tooltipClasses } from "@mui/material";
import React from "react";

const ExpenseDetailTable = () => {
  const expensesData = [
    {
      id: 1,
      vin: '1234567890',
      firstName: 'John',
      lastName: 'Doe',
      invoiceNumber: '01012322412',
      total: 4052,
      expenseDate: 'Apr 23, 2024',
      mileage:  '61002',
      category: '' ,
      transactionID:  '0',
      invoice:  '',
    },
    {
      id: 2,
      vin: '1234567890',
      firstName: 'John',
      lastName: 'Doe',
      invoiceNumber: '01012322412',
      total: 4052,
      expenseDate: 'Apr 23, 2024',
      mileage:  '61002',
      category: '' ,
      transactionID:  '0',
      invoice:  '',
    },
    {
      id: 3,
      vin: '1234567890',
      firstName: 'John',
      lastName: 'Doe',
      invoiceNumber: '01012322412',
      total: 4052,
      expenseDate: 'Apr 23, 2024',
      mileage:  '61002',
      category: '' ,
      transactionID:  '0',
      invoice:  '',
    },
  ];
  const displayExpenses = expensesData.map((alert) => (
    <tr key={alert.id}>
      <td>{alert.vin}</td>
      <td>{alert.firstName}</td>
      <td>{alert.lastName}</td>
      <td>{alert.invoiceNumber}</td>
      <td>{alert.total}</td>
      <td>{alert.expenseDate}</td>
      <td>{alert.mileage}</td>
      <td>{alert.category}</td>
      <td>{alert.transactionID}</td>
      <td>{alert.invoice}</td>

    </tr>
  ));

  return (
    <div>
      <div className="rounded-xl border-2 border-neutral-200">
        <table className="service-alerts-table bg-white rounded-xl w-full text-center overflow-hidden">
          <thead>
            <tr>
              <th>Vin</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Invoice Number</th>
              <th>Total</th>
              <th>Expense Date</th>
              <th>Mileage</th>
              <th>Category</th>
              <th>Transaction ID</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>{displayExpenses}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseDetailTable;
