import React, { Component } from 'react';
import '../stylesheets/components/_navigation.scss';

//primary nav
class PrimaryNavigation extends Component{
    render(){
        return(
            <nav className="box">
               <ul className="navbar box m-0">
                  <li className="navbar--item">
                     <a href="!#" className="navbar--item-link">Menu one</a> 
                  </li>
                  <li className="navbar--item">
                     <a href="!#" className="navbar--item-link is-active">Menu two</a> 
                  </li>
                  <li className="navbar--item">
                     <a href="!#" className="navbar--item-link">Menu three</a> 
                  </li>
                  <li className="navbar--item">
                     <a href="!#" className="navbar--item-link">Menu four</a> 
                  </li>
                  <li className="navbar--item">
                     <a href="!#" className="navbar--item-link">Menu five</a> 
                  </li>
               </ul>
            </nav>
        );
    }
}


//secondary nav
class SecondaryNavigation extends Component{
    render(){
        return(
            <nav className="box mt-5">
               <ul className="nav box p-0 m-0">
                  <li className="nav--item">
                     <a href="!#" className="nav--item-link">Menu one</a> 
                  </li>
                  <li className="nav--item">
                     <a href="!#" className="nav--item-link is-active">Menu two</a> 
                  </li>
                  <li className="nav--item">
                     <a href="!#" className="nav--item-link">Menu three</a> 
                  </li>
                  <li className="nav--item">
                     <a href="!#" className="nav--item-link">Menu four</a> 
                  </li>
                  <li className="nav--item">
                     <a href="!#" className="nav--item-link">Menu five</a> 
                  </li>
               </ul>
            </nav>
        );
    }
}



export { PrimaryNavigation, SecondaryNavigation };