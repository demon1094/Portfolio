import { Container } from './styles'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import Logo from '../../assets/Logo.png'

import { useState } from 'react'

export function Header() {
  const [ open, setOpen ] = useState<boolean>()

  function toogleMobileMenu() {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <Container>
      <nav>
        <img src={Logo} alt="Logo" />

        <ul className="navigation">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#tecs">Tecnologias</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

        <ul className="social-media">
          <li>
            <a href="https://github.com/demon1094" target="_blank"><BsGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/diego-araujo-474780258/" target="_blank"><BsLinkedin /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/_diiaraujoo/" target="_blank"><BsInstagram /></a>
          </li>
        </ul>
        
        <div className={`mobile-menu-wrapper ${open ? 'open' : 'close' }`}>
          <div className="mobile-menu" onClick={toogleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav-bar ${open ? 'open' : 'close'}`}>
        <ul className="mobile-nav">
          <li><a onClick={toogleMobileMenu} href="#about">Sobre</a></li>
          <li><a onClick={toogleMobileMenu} href="#tecs">Tecnologias</a></li>
          <li><a onClick={toogleMobileMenu} href="#projects">Projetos</a></li>
          <li><a onClick={toogleMobileMenu} href="#contact">Contato</a></li>
        </ul>

        <ul className="mobile-social-media">
          <li>
            <a href="https://github.com/demon1094" target="_blank"><BsGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/diego-araujo-474780258/" target="_blank"><BsLinkedin /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/_diiaraujoo/" target="_blank"><BsInstagram /></a>
          </li>
        </ul>
      </div>
    </Container>
  )
}