import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer'
import axios from 'axios'

import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
