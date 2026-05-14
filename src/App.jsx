import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/home'
import Doctors from './pages/Doctors'
import LogIn from './pages/LogIn'
import About from './pages/about'
import Contact from './pages/contact'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='/doctors' element={<Doctors />}/>
        <Route path ='/doctors/:speciality' element={<Doctors />}/>
        <Route path ='/login' element={<LogIn />}/>
        <Route path ='/about' element={<About />}/>
        <Route path ='/contact' element={<Contact />}/>
        <Route path ='/my-appointments' element={<MyAppointments />}/>
        <Route path ='/appointment/:docId' element={<Appointment />}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App

