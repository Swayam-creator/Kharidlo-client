import { useState } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div >
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
 </div>
  )
}

export default App
