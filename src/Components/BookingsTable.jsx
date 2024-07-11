import { Typography } from '@mui/material';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const BookingsTable = () => {
    const bookingsData = [
        {
            driverId: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            vin: 'ABC123XYZ456'
        },
        {
            driverId: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            address: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            vin: 'DEF456XYZ789'
        },
        {
            driverId: 3,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            vin: 'ABC123XYZ456'
        },
        {
            driverId: 4,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            address: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            vin: 'DEF456XYZ789'
        },
        {
            driverId: 5,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            vin: 'ABC123XYZ456'
        },
        {
            driverId: 6,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            address: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            vin: 'DEF456XYZ789'
        },
        {
            driverId: 7,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            vin: 'ABC123XYZ456'
        },
        {
            driverId: 8,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            address: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            vin: 'DEF456XYZ789'
        },
        {
            driverId: 9,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            vin: 'ABC123XYZ456'
        },
        {
            driverId: 10,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            address: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            vin: 'DEF456XYZ789'
        },
        {
            driverId: 11,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            vin: 'ABC123XYZ456'
        },
        {
            driverId: 12,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            address: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            vin: 'DEF456XYZ789'
        },
        // Add more booking objects as needed
    ];

    const [pageNumber, setPageNumber] = useState(0); // State to track current page
    const bookingsPerPage = 10; // Number of bookings per page
    const pagesVisited = pageNumber * bookingsPerPage;

    // Display data for the current page
    const displayBookings = bookingsData
        .slice(pagesVisited, pagesVisited + bookingsPerPage)
        .map((booking) => (
            <tr key={booking.driverId}>
                <td>{booking.driverId}</td>
                <td>{booking.firstName}</td>
                <td>{booking.lastName}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.address}</td>
                <td>{booking.vehicle}</td>
                <td>{booking.vin}</td>
            </tr>
        ));

    // Calculate number of pages
    const pageCount = Math.ceil(bookingsData.length / bookingsPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className=''>
            <div className='rounded-xl border-2 border-neutral-200'>
                <table className='bookings-table bg-white rounded-xl w-full text-center overflow-hidden'>
                    <thead>
                        <tr>
                            <th>Driver ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Vehicle</th>
                            <th>VIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayBookings}
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

export default BookingsTable;
