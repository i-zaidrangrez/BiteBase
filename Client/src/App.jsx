import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import OpenRoutes from './components/OpenRoutes.jsx'
import Cart from './pages/Cart.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/register' element={<OpenRoutes><Register/></OpenRoutes>}/>
        <Route path='/login' element={
          <OpenRoutes><Login/></OpenRoutes>}/>
        <Route path='/' element={
          <ProtectedRoutes>
            <Home/>
          </ProtectedRoutes>
          }/>
        <Route path='/menu' element={
          <ProtectedRoutes>
            <Menu/>
          </ProtectedRoutes>
          }/>
        <Route path='/cart' element={
          <ProtectedRoutes>
            <Cart/>
          </ProtectedRoutes>
          }/>
      </Routes>
    </div>
  )
}

export default App