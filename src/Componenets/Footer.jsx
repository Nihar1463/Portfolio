import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='footer' >
       <div className="social-icon">
          <a href="https://www.linkedin.com/in/niharbijva146">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Nihar1463">
            <i class="bx bxl-github"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram-alt"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <p className='copyright'>
        © Nihar Bijva | All Rights Reserved
        </p>
    </footer>
  )
}

export default Footer