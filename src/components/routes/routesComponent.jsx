import React from 'react'
import {Routes,Route} from  'react-router'
import Login from '../login/login'
import Navbar from '../navbar/navbar'
import Home from '../home/home'
import Contact from '../contact/contact'
import About from '../about/about'
export default function RoutesComponent() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route  path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </div>
  )
}
