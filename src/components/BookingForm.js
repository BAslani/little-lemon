import React, { useReducer, useEffect } from 'react';
import { VStack, HStack } from '@chakra-ui/react';
import restaurant1 from './Assets/restaurant chef B.jpg';
import restaurant2 from './Assets/restaurant.jpg';
import * as Yup from "yup";
import { useFormik } from "formik";
import useSubmit from "../hooks/useSubmit";

// Reducer function to handle state changes for availableTimes
const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_TIMES':
            return initializeTimes();
        default:
            return state;
    }
};

// Function to create the initial state for availableTimes
const initializeTimes = () => {
    return ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
};

const BookingForm = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime, numberOfGuests, setNumberOfGuests, selectedOccasion, setSelectedOccasion }) => {
    const { submit } = useSubmit();
    // Initialize availableTimes using useReducer and the availableTimesReducer
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

    // Update available times based on selected date
    const updateTimes = () => {
        // For now, we'll return the same available times.
        dispatch({ type: 'INITIALIZE_TIMES' });
    };

    const formik = useFormik({
        initialValues: {
          date: "",
          time: "",
          guests: "",
          occasion: "",
        },
        onSubmit: (values, { resetForm }) => {
          submit("", values);
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Required"),
            time: Yup.string().required("Required"),
            occasion: Yup.string().required("Required"),
            guests: Yup.number().required("Required"),
        }),
      });

    // Listen for changes in selectedDate and update availableTimes accordingly
    useEffect(() => {
        updateTimes();
    }, [selectedDate]);

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
                onSubmit={formik.handleSubmit}
            >
                <VStack w="960px" maxWidth="100vw">
                    <HStack>
                        <label htmlFor="res-date">Date</label>
                        <input
                            type="date"
                            id="res-date"
                            value={formik.values.date}
                            placeholder='Date'
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />

                        <label htmlFor="res-time">Time</label>
                        <select
                            id="res-time"
                            value={formik.values.time}
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
                        value={formik.values.guests}
                        onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={formik.values.occasion}
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
