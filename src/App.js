import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import 'bootstrap/dist/css/bootstrap.css'



function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter >
        <Routes allign="center">
          <Route index element = {<Homepage/>}/>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path = "Login" element ={<Login/>} />
          <Route path = "Registration" element ={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;