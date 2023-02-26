import React, { useState } from 'react'
import './App.css'
import {Button, Divider, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

import { supabase } from './client'

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
const SubmitForm = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
}

  return (
    <div>
    <Form className='LoginForm'>
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
        <Button className='loginBtn' type='primary' onClick={SubmitForm} block>
            Sign up
        </Button>
        <Divider style={{bordercolor: "black"}}>or </Divider>
        <Link to='/login'>
  <Button className='loginBtn' type='primary'  block>
    Log in?
  </Button>
  </Link>
      
    </Form>
    </div>
  )
}

export default LoginForm
