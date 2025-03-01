import React from 'react'
import './About.css'
import profile_img from '../../assets/profileImg.png'
import theme_pattern from '../../assets/logoasset.svg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>Sobre mi</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam quas delectus eum velit amet, perferendis voluptatem praesentium ut? Veritatis modi atque eius, mollitia officiis consequatur asperiores nostrum voluptatem explicabo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati aliquam quia in esse? Ea autem, voluptates provident sunt in, placeat quidem odit voluptatem laudantium ipsa, id animi non sed.</p>
                </div>
                <div className="about-skills">
                    <div className="about-habilidad"><p>HTML y CSS </p><hr style={{width:"100%"}}/></div>
                    <div className="about-habilidad"><p>HTML y CSS </p><hr style={{width:"50%"}}/></div>
                    <div className="about-habilidad"><p>HTML y CSS </p><hr style={{width:"50%"}}/></div>
                    <div className="about-habilidad"><p>HTML y CSS </p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-logros">
            <div className="logro">
                <h1>+2</h1>
                <p>Años de experiencia</p>
            </div>
            <hr />
            <div className="logro">
                <h1>3</h1>
                <p>Proyectos completos</p>
            </div>
            <hr />
            <div className="logro">
                <h1>2</h1>
                <p>Proyectos en proceso</p>
            </div>
        </div>
    </div>
  )
}

export default About