import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <nav>
            <div className="left">
                <ul>
                    <li className='active'><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/technologies" className='link'>Technologies</Link></li>
                    <li><Link to="/project" className='link'>Projects</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                </ul>
            </div>
            <div className="right">
                <a 
                  href="https://www.linkedin.com/in/anas-chauhan-7a632223b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a 
                  href="https://github.com/ChauhanAnas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </nav>
    </>
  );
};

export default Navbar;
