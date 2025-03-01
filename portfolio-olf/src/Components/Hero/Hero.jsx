import React from 'react'
import './Hero.css'
import profile_image from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_image} alt="" />
        <h1>Soy <span>Octavio Lucardi Fierro,</span> desarrollador frontend y videojuegos en Argentina</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil atque quam error accusantium. Ullam expedita ad fugiat sit voluptatum eveniet voluptate quos ex necessitatibus officia suscipit, reprehenderit molestiae ipsam?</p>
        <div className="hero-action">
            <div className="hero-connect">Contactame</div>
            <div className="hero-resume">Mi Curriculum</div>
        </div>
        
    </div>
  )
}

export default Hero