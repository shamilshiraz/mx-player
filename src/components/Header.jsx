import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
         <Navbar className="bg-primary ">
    <Container>
      <Navbar.Brand >
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>
        <i class="fa-solid fa-play"></i>  
        Media player
        </Link>
     
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header