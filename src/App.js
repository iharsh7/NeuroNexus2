import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Play from './components/Play'
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/play' element={<Play/>}/>
      </Routes>
    </div>
  )
}

export default App