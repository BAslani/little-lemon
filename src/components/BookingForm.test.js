import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders static text', () => {
  render(<BookingForm />);


  const staticTextElement = screen.getByText('Little Lemon');
  expect(staticTextElement).toBeInTheDocument();
});

// Mock useEffect to be able to test its behavior
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

test('updateTimes and initializeTimes functions update availableTimes state', () => {
  // Mock the implementation of useEffect
  const useEffect = jest.spyOn(React, 'useEffect');
  const updateTimes = jest.fn();
  const initializeTimes = jest.fn().mockReturnValue(['09:00', '10:00', '11:00']);

  useEffect.mockImplementation((callback) => callback());

  // Render the component
  render(<BookingForm />);
  const dateInput = screen.getByLabelText('Date');

  // Trigger a change event on the date input to update availableTimes
  fireEvent.change(dateInput, { target: { value: '2023-07-22' } });

  // Expect the updateTimes function to have been called
  expect(updateTimes).toHaveBeenCalledTimes(1);

  // Expect the initializeTimes function to have been called
  expect(initializeTimes).toHaveBeenCalledTimes(1);
});
