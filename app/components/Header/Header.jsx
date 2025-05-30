import React from 'react'
import NavTop from './NavTop'
import NavBar from './NavBar'
import NavBarV2 from './NavBarV2'


export default function Header() {
  return (
    <div className='shadow-xl'>
    <NavTop/>
    {/* <NavBarV2/> */}
    <NavBar/>
    </div>
  )
}
