import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Timeliner from './components/Timeliner';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
