import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AddEmployee from './pages/addEmployee'
import UpdateEmployee from './pages/updateEmployee'
import ViewEmployee from './pages/viewEmployee'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Add' element={<AddEmployee/>} />
        <Route path='/Update/:index' element={<UpdateEmployee/>} />
        <Route path='/View' element={<ViewEmployee/>} />
      </Routes>
    </>
  )
}

export default App
