import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Movies from '../src/pages/Movies';

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Movies />} />
    <Route path="/category/:category" element={<Movies />} />
    </Routes>
   </Router>
  );
};

export default App;
