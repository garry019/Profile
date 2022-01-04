import React, {useEffect} from 'react';
//import $ from 'jquery';

function Footer(){

    useEffect(() => {
        init()
    }, []);

    function init(){
        //
    }

    return(
        <footer className="fixed-bottom">
            <ul>
                <li><i className="fab fa-whatsapp"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
                <li><i className="fab fa-github"></i></li>
                <li><i className="fab fa-discord"></i></li>
            </ul>
        </footer>
    );
}

export default Footer;