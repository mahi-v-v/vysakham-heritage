import React, { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, isToday, isBefore } from 'date-fns';
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';

const AvailabilityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCheckIn, setSelectedCheckIn] = useState<Date | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<Date | null>(null);
  const [availabilityResult, setAvailabilityResult] = useState<string | null>(null);
  
  const { isDateBooked, checkAvailability } = useBooking();

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
    if (isBefore(date, new Date()) && !isSameDay(date, new Date())) {
      return; // Don't allow selecting past dates
    }

    if (!selectedCheckIn || (selectedCheckIn && selectedCheckOut)) {
      // Select check-in date
      setSelectedCheckIn(date);
      setSelectedCheckOut(null);
      setAvailabilityResult(null);
    } else if (selectedCheckIn && !selectedCheckOut) {
      // Select check-out date
      if (isBefore(date, selectedCheckIn)) {
        setSelectedCheckIn(date);
        setSelectedCheckOut(null);
      } else {
        setSelectedCheckOut(date);
        const result = checkAvailability(selectedCheckIn, date);
        setAvailabilityResult(result);
      }
    }
  };

  const getDateStatus = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    if (isDateBooked(dateStr)) return 'booked';
    return 'available';
  };

  const getDateClassName = (date: Date) => {
    const isPast = isBefore(date, new Date()) && !isSameDay(date, new Date());
    const status = getDateStatus(date);
    const isSelected = (selectedCheckIn && isSameDay(date, selectedCheckIn)) || 
                      (selectedCheckOut && isSameDay(date, selectedCheckOut));
    const isInRange = selectedCheckIn && selectedCheckOut && 
                      date >= selectedCheckIn && date <= selectedCheckOut;

    let className = 'w-10 h-10 flex items-center justify-center text-sm rounded-lg cursor-pointer transition-all duration-200 ';
    
    if (isPast) {
      className += 'text-gray-400 cursor-not-allowed ';
    } else if (isSelected) {
      className += 'bg-blue-600 text-white font-semibold ';
    } else if (isInRange) {
      className += 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ';
    } else if (status === 'booked') {
      className += 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 cursor-not-allowed ';
    } else if (isToday(date)) {
      className += 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold ';
    } else if (isSameMonth(date, monthStart)) {
      className += 'text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/20 ';
    } else {
      className += 'text-gray-400 dark:text-gray-500 ';
    }

    return className;
  };

  const getAvailabilityMessage = () => {
    if (!availabilityResult) return null;

    const messages = {
      'available': {
        text: 'Dates are available!',
        className: 'text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
      },
      'booked': {
        text: 'Sorry, these dates are already booked.',
        className: 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
      },
      'partially-available': {
        text: 'Limited availability - please contact us to check.',
        className: 'text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
      }
    };

    return messages[availabilityResult as keyof typeof messages];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Check Availability</h3>
      
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
            disabled={isBefore(date, new Date()) && !isSameDay(date, new Date())}
          >
            {format(date, 'd')}
          </button>
        ))}
      </div>

      {/* Selected Dates */}
      {selectedCheckIn && (
        <div className="mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Check-in:</span> {format(selectedCheckIn, 'MMM dd, yyyy')}
          </div>
          {selectedCheckOut && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Check-out:</span> {format(selectedCheckOut, 'MMM dd, yyyy')}
            </div>
          )}
        </div>
      )}

      {/* Availability Result */}
      {availabilityResult && (
        <div className={`p-4 rounded-lg mb-6 ${getAvailabilityMessage()?.className}`}>
          <p className="font-medium">{getAvailabilityMessage()?.text}</p>
          {availabilityResult === 'available' || availabilityResult === 'partially-available' ? (
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in booking your homestay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          ) : null}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-200 dark:bg-green-700 rounded"></div>
          <span className="text-gray-600 dark:text-gray-400">Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-200 dark:bg-red-700 rounded"></div>
          <span className="text-gray-600 dark:text-gray-400">Booked</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded"></div>
          <span className="text-gray-600 dark:text-gray-400">Selected</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;