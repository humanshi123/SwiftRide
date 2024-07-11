import { Typography } from '@mui/material';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const ActiveDriversTable = () => { 
    const driversData = [
        {
            appId: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            location: '123 Main St, Anytown',
            vehicle: 'Toyota Camry',
            carHealth: 'Normal',
            chat: 'Go to chat'
        },
        {
            appId: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            phone: '+1987654321',
            location: '456 Elm St, Othertown',
            vehicle: 'Honda Accord',
            carHealth: 'Normal',
            chat: 'Go to chat'
        },
        // Add more driver objects as needed
    ];

    const [pageNumber, setPageNumber] = useState(0); // State to track current page
    const driversPerPage = 10; // Number of drivers per page
    const pagesVisited = pageNumber * driversPerPage;

    // Display data for the current page
    const displayDrivers = driversData
        .slice(pagesVisited, pagesVisited + driversPerPage)
        .map((driver) => (
            <tr key={driver.appId}>
                <td>{driver.appId}</td>
                <td>{driver.firstName}</td>
                <td>{driver.lastName}</td>
                <td>{driver.email}</td>
                <td>{driver.phone}</td>
                <td>{driver.location}</td>
                <td>{driver.vehicle}</td>
                <td>{driver.carHealth}</td>
                <td>{driver.chat}</td>
            </tr>
        ));

    // Calculate number of pages
    const pageCount = Math.ceil(driversData.length / driversPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className=''>
            <div className='rounded-xl border-2 border-neutral-200'>
                <table className='drivers-table bg-white rounded-xl w-full text-center overflow-hidden'>
                    <thead>
                        <tr>
                            <th>App ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Vehicle</th>
                            <th>Car Health</th>
                            <th>Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayDrivers}
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

export default ActiveDriversTable;
