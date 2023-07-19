import HomePage from './components/HomePage';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
    </Routes>
  );
}

export default App;
