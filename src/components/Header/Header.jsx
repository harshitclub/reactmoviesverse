import React from 'react'
import './Header.css'

const Header = () => {
  // header component that displays the title of our movie application
  return <span onClick={()=>window.scroll(0,0)} className='header'>React Moviesverse</span>
}

export default Header