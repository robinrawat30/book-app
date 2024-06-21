import React from 'react'


import { Routes, Route, BrowserRouter } from 'react-router-dom'


import Home from './components/home/Home'
import AboutPage from './components/about/AboutPage'
import CoursesPage from './components/courses/CoursesPage'
import ContactPage from './components/contact/ContactPage'
import Signup from './components/Signup'


const App = () => {
  return (
    <>

      <BrowserRouter>

     

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

       

      </BrowserRouter>

    </>
  )
}

export default App
