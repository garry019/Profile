import React from 'react';
//import $ from 'jquery';

function Mystats() {

    let scrollPositionNow = window.scrollY;

    window.addEventListener('scroll', (event) => {
        event.preventDefault();
        let offsetNow = checkOffset(scrollPositionNow);
        document.getElementById('offsetTop').innerHTML = 'Offset Top '+offsetNow;

        /* if(scroll > scrollPositionNow){
            console.log('bajando');
            scrollPositionNow = window.scrollY;
        }
        if(scroll < scrollPositionNow){
            console.log('subiendo');
            scrollPositionNow = window.scrollY;
        } */
        //window.scrollTo(0,0);

        /* if(scroll > 10){
            //window.scrollTo(0,disciplines.offsetTop);
        } */

        //console.log(home.offsetTop,disciplines.offsetTop,software.offsetTop,more.offsetTop);
    });

    function checkOffset(data){
        let direction = null;
        let scrollnow = window.scrollY;
        
        let home = document.getElementById('home');
        let disciplines = document.getElementById('disciplines');
        let software = document.getElementById('software');
        let more = document.getElementById('more');

        if(data < scrollnow){
            direction = 'bajando';
            
        }else if(data > scrollnow){
            direction = 'subiendo';   
        }

        switch (direction) {
            case 'bajando':
                if(scrollnow < disciplines.offsetTop){
                    window.scrollTo(0,disciplines.offsetTop);
                }
                if(scrollnow > disciplines.offsetTop && scrollnow < software.offsetTop){
                    window.scrollTo(0,software.offsetTop);
                }
                if(scrollnow > software.offsetTop && scrollnow < more.offsetTop){
                    window.scrollTo(0,more.offsetTop);
                }
                break;
            case 'subiendo':
                if(scrollnow > more.offsetTop || scrollnow === more.offsetTop){
                    window.scrollTo(0,software.offsetTop);
                }
                if(scrollnow < more.offsetTop && scrollnow > software.offsetTop){
                    window.scrollTo(0,software.offsetTop);
                }
                if(scrollnow < software.offsetTop && scrollnow > disciplines.offsetTop){
                    window.scrollTo(0,disciplines.offsetTop);
                }
                if(scrollnow < disciplines.offsetTop && scrollnow > home.offsetTop){
                    window.scrollTo(0,home.offsetTop);
                }
                break;
            default:
                break;
        }

        scrollPositionNow = window.scrollY;
        return scrollnow+' '+direction;
    }

    return (
        <div className="row myStats fixed-bottom">
            <div className="col">
                <span id={'offsetTop'}></span>
            </div>
            <div className="col">

            </div>
        </div>
    );
}

export default Mystats;