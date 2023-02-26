import React from 'react'

import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginForm from './SignUp'
import Signup from './LoginForm'


function App() {
  return (
    <div className='main'>
<Router>
<Routes>
   
   <Route path='/login' element={<Signup />} />
   <Route path='/' element={<LoginForm />} />

  
</Routes>
</Router>
</div>
  )
}

export default App
