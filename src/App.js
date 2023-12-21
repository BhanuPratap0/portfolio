import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Navbar />
        <Home />
        <Routes>
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
