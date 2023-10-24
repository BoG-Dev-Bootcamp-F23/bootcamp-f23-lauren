import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import LinesPage from './pages/LinesPage';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [currColor, setCurrColor] = useState("GOLD");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} setCurrColor={setCurrColor}/>
          <Route path='about' element={<About />} />
          <Route path='schedules' element={<LinesPage currColor={currColor}/>} />
        </Routes>
      </BrowserRouter>
      <footer>Made by Lauren Ji, 2023</footer>
    </div>
  );
}

export default App;
