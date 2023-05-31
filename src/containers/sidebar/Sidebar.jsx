import React from 'react'
import "./sidebar.css"
import { Header } from '../../components'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Header/>
      <ul>
        <a href='#home'><li>Home</li></a>
        <a href='#about'><li>About Me</li></a>
        <a href='#skills'><li>Skills</li></a>
        <a href='#contact'><li>Comtact Me</li></a>
      </ul>
    </div>
  )
}

