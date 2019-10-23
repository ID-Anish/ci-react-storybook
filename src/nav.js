import React, { Component } from 'react';
//import 'stylesheets/components/_navigation.scss';
import { Link } from 'react-router-dom';

//Nav
function Nav(){

   return(
      <nav className="box">
         <ul className="navbar box m-0">
            <li className="navbar--item"><Link className="navbar--item-link" to='/'>Home</Link></li>
            <li className="navbar--item"><Link className="navbar--item-link" to='/about'>About</Link></li>
            <li className="navbar--item"><Link className="navbar--item-link" to='/service'>Service</Link></li>
         </ul>
      </nav>
  );
}


export default Nav;