import React from 'react';
import './index.css';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={LogoS} alt="logo" className="logo" />

      <div className="menu">
        <Link className="menulist">Home</Link>
        <Link className="menulist">About</Link>
        <Link className="menulist">Resume</Link>
      </div>

      <button className="menubtn">
        <FontAwesomeIcon icon={faEnvelope} className="menufa" /> Contact Me
      </button>
    </nav>
  )
}

export default Navbar;
