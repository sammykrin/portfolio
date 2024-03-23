import React from 'react';
import './index.css';
import bg from '../../assets/images/papa.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Samuel</span><br/>Web Developer</span>
            <p className="introPara">Frontend Developer/ Cyber Security Enthusiast <br/> Auto Dealer & Gadgets Dealer</p>
            <Link><button className="btn"><FontAwesomeIcon icon={faBagShopping} className="btnfa" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Home;
