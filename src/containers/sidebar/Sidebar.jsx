import React from 'react'
import "./sidebar.css"
import {Roofing, Handyman, FolderCopy, Psychology, School, Info, Contacts} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-ul'>
        <li className='sidebar-li'><a href='#home'><Roofing/></a></li>
        <li className='sidebar-li'><a href='#skills'><Handyman/></a></li>
        <li className='sidebar-li'><a href='#experience'><Psychology/></a></li>
        <li className='sidebar-li'><a href='#educationn'><School/></a></li>
        <li className='sidebar-li'><a href='#project'><FolderCopy/></a></li>
        <li className='sidebar-li'><a href='#about'><Info/></a></li>
        <li className='sidebar-li'><a href='#contact'><Contacts/></a></li>
      </ul>
    </div>
  )
}

