import React, { Component } from 'react';
import './components.css';
import logo_small from '../pic/logo_small.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {
    render() {
        return(
        <div id='header' className='sticky'>
            {/* <span className='Navs' id='logo'><span id='pola'>Pola</span><span id='ris'>ris</span></span> */}
            <img id='logo' src= {logo_small} alt='logo'/>
            <AnchorLink className='Navs Button' href='#home'>HOME</AnchorLink>
            <AnchorLink className='Navs Button' href='#about'>ABOUT</AnchorLink>
            <AnchorLink className='Navs Button' href='#members'>MEMBERS</AnchorLink>
            <AnchorLink className='Navs Button' href='#shows'>SHOWS</AnchorLink>
            <AnchorLink className='Navs Button' href='#gallery'>GALLERY</AnchorLink>
            <AnchorLink className='Navs Button' href='#contact'>CONTACT</AnchorLink>
        </div>
        );
    }
}

export default Header;