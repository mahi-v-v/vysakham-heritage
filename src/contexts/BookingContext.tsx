import React, { createContext, useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';

interface BookingContextType {
  bookedDates: string[];
  addBookedDate: (date: string) => void;
  removeBookedDate: (date: string) => void;
  isDateBooked: (date: string) => boolean;
  checkAvailability: (checkIn: Date, checkOut: Date) => 'available' | 'booked' | 'partially-available';
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookedDates, setBookedDates] = useState<string[]>([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem('bookedDates');
    if (savedBookings) {
      setBookedDates(JSON.parse(savedBookings));
    }
  }, []);

  const addBookedDate = (date: string) => {
    const updatedDates = [...bookedDates, date];
    setBookedDates(updatedDates);
    localStorage.setItem('bookedDates', JSON.stringify(updatedDates));
  };

  const removeBookedDate = (date: string) => {
    const updatedDates = bookedDates.filter(d => d !== date);
    setBookedDates(updatedDates);
    localStorage.setItem('bookedDates', JSON.stringify(updatedDates));
  };

  const isDateBooked = (date: string) => {
    return bookedDates.includes(date);
  };

  const checkAvailability = (checkIn: Date, checkOut: Date) => {
    const checkInStr = format(checkIn, 'yyyy-MM-dd');
    const checkOutStr = format(checkOut, 'yyyy-MM-dd');
    
    // Check for exact date conflicts
    const hasConflict = bookedDates.some(bookedDate => {
      return bookedDate >= checkInStr && bookedDate < checkOutStr;
    });

    if (hasConflict) {
      return 'booked';
    }

    // Check for partial availability (check-in on same day as previous check-out)
    const hasPartialConflict = bookedDates.includes(checkInStr);
    
    if (hasPartialConflict) {
      return 'partially-available';
    }

    return 'available';
  };

  return (
    <BookingContext.Provider value={{
      bookedDates,
      addBookedDate,
      removeBookedDate,
      isDateBooked,
      checkAvailability
    }}>
      {children}
    </BookingContext.Provider>
  );
};