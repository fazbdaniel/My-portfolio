import React from 'react'
import "./sidebar.css"
import { Header } from '../../components'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Header/>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Comtact Me</a></li>
      </ul>
    </div>
  )
}

