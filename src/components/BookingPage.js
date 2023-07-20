import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookingForm from './BookingForm';

function BookingPage() {
    // Define state variables for the form fields
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('1');
    const [selectedOccasion, setSelectedOccasion] = useState('Birthday');


    return (
        <>
            <Header />
            <BookingForm
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                numberOfGuests={numberOfGuests}
                setNumberOfGuests={setNumberOfGuests}
                selectedOccasion={selectedOccasion}
                setSelectedOccasion={setSelectedOccasion}
            />
            <Footer />
        </>
    )
}

export default BookingPage;