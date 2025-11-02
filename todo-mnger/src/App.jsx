import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ToDoApp from './components/td-app'
import ContactForm from './components/contactform'
import './App.css'

function App() {
  const [elem, setElem] = useState('todo');

  return (
    <>
        <BrowserRouter>
          <nav>
            <Link to={"/project-3/todo"} className='active' id='todo' >todo manager</Link> / {" "}
            <Link to={"/project-3/contact"} id='contact' >contact</Link>
          </nav>
          <br />
          <Routes>
            <Route path='/project-3/todo' element={<ToDoApp />}></Route>
            <Route path='/project-3/contact' element={<ContactForm />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
