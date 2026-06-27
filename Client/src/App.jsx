import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App