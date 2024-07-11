import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Calendar from '../assets/Calendar.svg'


const ReportYearAndDateRange = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(10), (val, index) => currentYear - index);

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const formatDate = (date) => {
    return date ? date.toLocaleDateString() : '';
  };

  return (
    <>
     <div className='reportdatarange flex align-center gap-[20px] mt-[30px] mb-[20px]'>
      <div className='flex flex-col'>
        <label className='lato font-bold text-[16px] mb-[10px]' htmlFor="yearSelect">Report Year:</label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className='relative flex flex-col'>
        <label className='lato font-bold text-[16px] mb-[10px]'>Report Date Range:</label>
        <img className='calendar-img' src={Calendar} alt='Calendar' />
        <input
          type="text"
          readOnly
          value={`${formatDate(dateRange[0].startDate)} - ${formatDate(dateRange[0].endDate)}`}
          onClick={toggleDatePicker}
          placeholder="Select Date Range"
        />
        {showDatePicker && (
          <DateRange
            ranges={dateRange}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
          />
        )}
      </div>
      </div> 
    
    </> 
  );
};

export default ReportYearAndDateRange;
