import React, { useState } from 'react';
import { VStack, HStack } from '@chakra-ui/react';
import restaurant1 from './Assets/restaurant chef B.jpg';
import restaurant2 from './Assets/restaurant.jpg';

const BookingForm = () => {
    // Define state variables for the form fields
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState('1');
    const [selectedOccasion, setSelectedOccasion] = useState('Birthday');

    // Stateful array for available times
    const availableTimes = [
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted!');
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
        console.log('Number of Guests:', numberOfGuests);
        console.log('Selected Occasion:', selectedOccasion);
    };

    return (
        <section className='formSection'>
            <section className="heroInfo">
                <div>
                    <h1 className="title">Little Lemon</h1>
                    <h2 className="location">Chicago</h2>
                    <p>Find a table for any occasion</p>
                </div>
                <div className='bookingFormImgcontainer'>
                    <img src={restaurant1} alt='restaurant-chef' />
                    <img src={restaurant2} alt='restaurant' />
                </div>
            </section>
            <form
                className='form sectionCenter'
                onSubmit={handleSubmit}
            >
                <VStack w="960px" maxWidth="100vw">
                    <HStack>
                        <label htmlFor="res-date">Date</label>
                        <input
                            type="date"
                            id="res-date"
                            value={selectedDate}
                            placeholder='Date'
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />

                        <label htmlFor="res-time">Time</label>
                        <select
                            id="res-time"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                        >
                            {availableTimes.map((time) => (
                                <option key={time}>{time}</option>
                            ))}
                        </select>
                    </HStack>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="Number of Diners"
                        min="1"
                        max="10"
                        id="guests"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={selectedOccasion}
                        onChange={(e) => setSelectedOccasion(e.target.value)}
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>

                    <input
                        className='btn submitBtn'
                        type="submit"
                        value="Make Your reservation"
                    />
                </VStack>
            </form>
        </section>
    );
};

export default BookingForm;
