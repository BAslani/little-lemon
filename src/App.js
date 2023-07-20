import HomePage from './components/HomePage';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/booking-page' element={<BookingPage/>} />
    </Routes>
  );
}

export default App;
