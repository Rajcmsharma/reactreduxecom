import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-yellow'>
      <div className = "container py-4 text-center">
        <div className='flex align-center justify-center text-white fw-3 fs-14'>
          <Link to = "/" className='text-uppercase text-black'>Customer Support</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase text-black'>Nearer Center</Link>
          <div className='vert-line'></div>
          <Link to = "/" className='text-uppercase text-black'>About Shop.io</Link>
        </div>
        <span className='text-black copyright-text text-manrope fs-14 fw-3'>&copy; Shop.io. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer