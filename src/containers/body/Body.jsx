import React from 'react'
import "./body.css"
import { Home, About, Skills, Experience, Education, Projects } from '../../components'

export default function Body() {
  return (
    <div className='body'>
      <Home/>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <About/>
    </div>
  )
}
