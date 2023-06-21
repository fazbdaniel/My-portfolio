import React from 'react'
import "./body.css"
import { Home, About, Skills } from '../../components'

export default function Body() {
  return (
    <div className='body'>
      <Home/>
      <Skills/>
      <About/>
      
    </div>
  )
}
