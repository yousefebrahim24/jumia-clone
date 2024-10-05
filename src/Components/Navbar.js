import React from 'react';
import Logo from './Logo';
import Search from './Searchbox';
import NavIcons from './Icons';

export default function Navbar(){
  return (
  <div className='' id='navBar'>
    <nav className="navbar navbar-expand-lg lg py-3 container">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <div className='container'>
                <Search />
                <NavIcons />
           </div>
        </div>
      
      </div>
    </nav>
  </div>
  );
};