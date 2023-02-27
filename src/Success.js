import React from 'react'
import vids from './images/beachVid.mp4'
import './App.css'
import { supabase } from './client'

function Success() {
    
async function signout() {
    const { error } = await supabase.auth.signOut()
  }
  
  return (
    <div>
      <video autoPlay loop muted plays-inline>
        <source src={vids} type="video/mp4" />
      </video>
      <h1 className='content'>YOU ARE LOGGED IN. WELCOME TO BORA :D</h1>
    <button onClick={signout}>Signout</button>
    </div>

  )
}

export default Success
