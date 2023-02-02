import React, {useEffect} from 'react';
//import $ from 'jquery';


function Footer(){

    useEffect(() => {
        init()
    }, []);

    function init(){
        //
    }

    const waMessage = () =>{
        const text = "Hi Gabriel, from website profile | Can we talk?"
        return "https://wa.me/573148633004?text="+text
    }

    return(
        <footer className="row pb-2">
            <div className="col-md-12 footer">
                <ul>
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
                <div className='copy'>COPYRIGHT © 2022 GABRIEL CALDERON ALL RIGHTS RESERVED.</div>
            </div>
            
        </footer>
        
    );
}

export default Footer;