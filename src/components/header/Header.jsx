import React from 'react'
import "./header.css"
import dani from "../../assets/dani.jpg"

export default function Header() {
  return (
    <div className='header'>
      <div className='image'>
        <img src={dani} alt="dani" />
      </div>
    </div>
  )
}
