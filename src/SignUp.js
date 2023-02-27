import React, { useState } from 'react'
import './App.css'
import {Button, Divider, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { supabase } from './client'
import { FaGooglePlus } from 'react-icons/fa'

function LoginForm() {
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
async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      alert('Check your email for verification Link, if no link was send then try again.')
}catch (error) {
  alert(error)
}}

  return (
    <div>
    <Form className='LoginForm' onSubmitCapture={handleSubmit}>
        <Typography.Title className='welcome'>Sign up</Typography.Title>
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
        <Button className='loginBtn' type='primary' htmlType='Submit'  block>
            Sign up
        </Button>
        <Divider style={{bordercolor: "black"}}> </Divider>
        <Button className='Google' type='primary' onClick={signInWithGoogle} block>
            <FaGooglePlus className='FaGooglePlus'/>Continue with Google
        </Button>      
           
 <Link to='/login'><h5> Already have an Account?
Login here.</h5>
  </Link>
      
    </Form>
    </div>
  )
}

export default LoginForm
