import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Timeliner from './components/Timeliner';
import ParticlesComponent from './components/Particle';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/test' element={<ParticlesComponent id="particles"/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
