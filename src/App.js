import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navabar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'

const App = () => {
  const isNavActiveStyles=({isActive})=>{
    return {
      color: isActive ? "#f97316":null,
    };
  }
  return (
  <div className="app bg-gray-100 text-gray-700 min-h-screen ">
    <Navabar isNavActiveStyles={isNavActiveStyles}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    <Footer/>
  </div>

  )
}

export default App