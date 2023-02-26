import React from 'react'
import './App.css'
import {HashRouter, Route, Routes} from 'react-router-dom'
import LoginForm from './SignUp'
import Signup from './LoginForm'


function App() {
  return (
    <div className='main'>
     <HashRouter>
        <Routes>
          < Route path='/login' element={<Signup />} />
          <Route path='/' element={<LoginForm />} />
        </Routes>
    </HashRouter>
    </div>
  )
}

export default App
