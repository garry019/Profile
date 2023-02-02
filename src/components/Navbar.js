import React, { useEffect } from 'react';
//import { NavLink  } from "react-router-dom";
//import $ from 'jquery';

function Navbar() {

    useEffect(() => {
        init()
    }, [])

    function init() {
        //
    }

    const waMessage = () => {
        const text = "Hi Gabriel, from website profile | Can we talk?"
        return "https://wa.me/573148633004?text=" + text
    }

    return (
        <nav className="fixed-top">
            <ul className="col-4 float-start text-white" > <a href="/#" className="main-link">GABRIEL CALDERÓN</a> </ul>
            <ul className="col-4 float-end text-white"> 
                <li>
                    <a href={waMessage()} target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/gary-full-stack-web-developer/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/garry019" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                {/* <li>
                    <a href="https://discordapp.com/users/260918455778148362" target="_blank" rel="noreferrer">
                        <i className="fab fa-discord"></i>
                    </a>
                </li> */}
            </ul>
            <ul className="col-4">
                <li><a href={'#about'}>ABOUT</a></li>
                <li><a href={'#work'} >WORK</a ></li>
                <li><a href={'#contact'} >CONTACT</a ></li>
            </ul>
        </nav>
    );
}

export default Navbar;