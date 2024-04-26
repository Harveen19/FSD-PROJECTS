import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='footer'>
        <div class="custom-shape-divider-bottom-1712202460">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        <ul className='social-icons'>
            <FaLinkedin/>
            <FaSquareGithub/>
            <FaSquareTwitter/>
            <FaSquareFacebook/>
        </ul>
        <div>
            <ul className='menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;