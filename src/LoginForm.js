import React, { useEffect, useState } from 'react'
import './App.css'
import {Button, Divider, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import {FaGooglePlus} from 'react-icons/fa'
import { supabase } from './client'

function LoginForm() {
let navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        password: "",
        
    })
  console.log(formData)
 

    const handleChange = (event) => {
        setFormData((prevFormData) => {
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
            
        })

}
const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
        })
        if (error) throw error
        console.log(data)
        navigate('/sucessfull')
       
} catch (error) {
  alert (error)
}
}

async function signInWithGoogle() {

  const { data, session, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    option: {
      redirectTo: navigate('/sucessfull'),
    },
    })}
 
  
  




async function signout() {
  const { error } = await supabase.auth.signOut()
}

  return (
    <div>
    
    <Form className='LoginForm' onSubmitCapture={handleSubmit}>
        <Typography.Title className='welcome'>Log in</Typography.Title>
        <Form.Item 
          rules={[
            { 
                required: true, message: 'Please input a valid username.' 
            },
        ]}
        label="Email-add" name='email'>
            <Input placeholder='Enter your email' name='email'
                   onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Password" name='password' 
        rules={[
            {
            required: true,
            message: "Please enter your password."
            }
        ]} >
            <Input.Password placeholder='Enter your password'  name='password' 
                onChange={handleChange}/>
        </Form.Item>
        <Button className='loginBtn' type='primary' htmlType='Submit' block>
            Login
        </Button>
        <Divider style={{bordercolor: "black"}}>  </Divider>
       
        
        
  <Button className='Google' type='primary' onClick={signInWithGoogle} block>
            <FaGooglePlus className='FaGooglePlus'/>Continue with Google
        </Button>
   <Link to='/'><h5>No account yet? Sign up here.</h5>
  </Link>
    </Form>
    </div>
  )
}

export default LoginForm
