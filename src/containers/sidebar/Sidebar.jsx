import React from 'react'
import "./sidebar.css"
import {Roofing, Handyman, FolderCopy, Psychology, School, Info, Contacts} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-ul'>
        <li><a href='#home'><Roofing/></a></li>
        <li><a href='#skills'><Handyman/></a></li>
        <li><a href='#project'><FolderCopy/></a></li>
        <li><a href='#experience'><Psychology/></a></li>
        <li><a href='#education'><School/></a></li>
        <li><a href='#about'><Info/></a></li>
        <li><a href='#contact'><Contacts/></a></li>
      </ul>
    </div>
  )
}

