import { useState } from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
