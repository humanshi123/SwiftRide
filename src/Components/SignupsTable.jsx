import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const SignupsTable = () => {
    const signupsData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '+1234567890',
            statusApp: 'Awaiting driver', // Example status 
            notes: 'Lorem ipsum dolor sit amet', // Example notes
            diImage: 'https://via.placeholder.com/150', // Example DI Image URL
            vin: 'ABC123XYZ456' // Example VIN
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '+1234567890',
            statusApp: 'Active', // Example status 
            notes: ' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet', // Example notes
            diImage: '', // Example DI Image URL
            vin: 'ABC123XYZ456' // Example VIN
        },
        {
            id: 3,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '+1234567890',
            statusApp: 'Awaiting driver', // Example status 
            notes: 'Lorem ipsum dolor sit amet', // Example notes
            diImage: 'https://via.placeholder.com/150', // Example DI Image URL
            vin: 'ABC123XYZ456' // Example VIN
        },
        {
            id: 4,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '+1234567890',
            statusApp: 'Awaiting driver', // Example status 
            notes: 'Lorem ipsum dolor sit amet', // Example notes
            diImage: '', // Example DI Image URL
            vin: 'ABC123XYZ456' // Example VIN
        },
        {
            id: 5,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '+1234567890',
            statusApp: 'Active', // Example status 
            notes: 'Lorem ipsum dolor sit amet', // Example notes
            diImage: 'https://via.placeholder.com/150', // Example DI Image URL
            vin: 'ABC123XYZ456' // Example VIN
        },
        {
            id: 6,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phoneNumber: '+1234567890',
            statusApp: 'Active', // Example status 
            notes: 'Lorem ipsum dolor sit amet', // Example notes
            diImage: '', // Example DI Image URL
            vin: 'ABC123XYZ456' // Example VIN
        },
        // Add more signup objects as needed
    ];

    const [pageNumber, setPageNumber] = useState(0); // State to track current page
    const signupsPerPage = 10; // Number of signups per page
    const pagesVisited = pageNumber * signupsPerPage;

    // Display data for the current page
    const displaySignups = signupsData
        .slice(pagesVisited, pagesVisited + signupsPerPage)
        .map((signup) => (
            <tr key={signup.id}>
                <td>{signup.id}</td>
                <td>{signup.firstName}</td>
                <td>{signup.lastName}</td>
                <td>{signup.email}</td>
                <td>{signup.phoneNumber}</td>
                <td className={signup.statusApp === 'Awaiting driver' ? 'awaiting-class' : signup.statusApp === 'Active' ? 'delivered-class' : ''}><span>{signup.statusApp}</span></td>
                <td><span className='notes'>{signup.notes}</span></td>
                <td>
                    {signup.diImage ? (
                        <img className='m-auto' src={signup.diImage} alt={`${signup.firstName} ${signup.lastName}`} width="50" height="50" />
                    ) : '-'}
                </td>
                <td>{signup.vin}</td>
            </tr>
        ));

    // Calculate number of pages
    const pageCount = Math.ceil(signupsData.length / signupsPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className=''>
            <div className='rounded-xl border-2 border-neutral-200'>
                <table className='signup-table bg-white rounded-xl w-full text-center overflow-hidden'>
                    <thead>
                        <tr>
                            <th>App ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Status App</th>
                            <th>Notes</th>
                            <th>DI Image</th>
                            <th>VIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displaySignups}
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

export default SignupsTable;
