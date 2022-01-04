import React, {useEffect} from 'react';
import { NavLink  } from "react-router-dom";
//import $ from 'jquery';

function Navbar(){

    useEffect(() => {
        init()
    }, []);

    function init(){
        //
    }

    return(
        <nav className="fixed-top">
            <ul>
                <li><NavLink to="/home">HOME</NavLink ></li>
                <li><NavLink to="/about-me" >ABOUT ME</NavLink ></li>
                <li><NavLink to="/portfolio" >PORFOLIO</NavLink ></li>
                <li><NavLink to="/contact" >CONTACT</NavLink ></li>
            </ul>
        </nav>
    );
}

export default Navbar;