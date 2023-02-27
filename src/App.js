import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navabar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  const isNavActiveStyles=({isActive})=>{
    return {
      color: isActive ? "#f97316":null,
    };
  }
  return (
  <div className="app bg-gray-100 text-gray-700 min-h-screen sm:p-3">
    <Navabar isNavActiveStyles={isNavActiveStyles}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </div>

  )
}

export default App