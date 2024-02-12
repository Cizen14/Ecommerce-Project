

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminSignup from './Pages/AdminSignup'
import LoginPage from './Pages/LoginPage'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>} > </Route>
        <Route path='/signup' element={<AdminSignup/>} > </Route>

      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
