import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ToDoApp from './components/td-app'
import ContactForm from './components/contactform'
import './App.css'

function App() {
  return (
    <>
        <BrowserRouter>
          <nav>
            <Link to={"/todo"} className='active'>todo manager</Link> / {" "}
            <Link to={"/contact"}>contact</Link>
          </nav>
          <br />
          <Routes>
            <Route path='/todo' element={<ToDoApp />}></Route>
            <Route path='/contact' element={<ContactForm />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
