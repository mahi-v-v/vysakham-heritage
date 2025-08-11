import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const AdminCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { isDateBooked, addBookedDate, removeBookedDate } = useBooking();

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateRange = [];
  let day = startDate;
  while (day <= endDate) {
    dateRange.push(day);
    day = addDays(day, 1);
  }

  const nextMonth = () => {
    setCurrentDate(addDays(currentDate, 32));
  };

  const prevMonth = () => {
    setCurrentDate(addDays(currentDate, -32));
  };

  const handleDateClick = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    
    if (isDateBooked(dateStr)) {
      removeBookedDate(dateStr);
    } else {
      addBookedDate(dateStr);
    }
  };

  const getDateClassName = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const booked = isDateBooked(dateStr);

    let className = 'w-10 h-10 flex items-center justify-center text-sm rounded-lg cursor-pointer transition-all duration-200 ';
    
    if (booked) {
      className += 'bg-red-500 text-white font-semibold hover:bg-red-600 ';
    } else if (isToday(date)) {
      className += 'bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 font-semibold hover:bg-blue-300 dark:hover:bg-blue-600 ';
    } else if (isSameMonth(date, monthStart)) {
      className += 'text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 ';
    } else {
      className += 'text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 ';
    }

    return className;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Manage Bookings</h3>
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </button>
        
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
          {format(currentDate, 'MMMM yyyy')}
        </h4>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {dateRange.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            className={getDateClassName(date)}
          >
            {format(date, 'd')}
          </button>
        ))}
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
          <strong>Instructions:</strong>
        </p>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Click on any date to mark it as booked (red)</li>
          <li>• Click on a booked date to mark it as available</li>
          <li>• Changes are automatically saved</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminCalendar;