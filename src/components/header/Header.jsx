import React from 'react'

import './header.css'

import Buttons from './Buttons'
import HeaderSocials from './HeaderSocials'

import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dinh Tan Dat</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <Buttons />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header