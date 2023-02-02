import {useEffect, useRef} from 'react'
import LaravelLogo from '../images/logos/laravel-bw.jpg'
import ReactLogo from '../images/logos/react-bw.jpg'
import WordpressLogo from '../images/logos/wordpress-bw.jpg'
import ThreeLogo from '../images/logos/threejs.jpg'
import NodeLogo from '../images/logos/nodejs-bw.jpg'
import DJangoLogo from '../images/logos/django-bw.jpg'
import FullStackCert from '../images/full-stack-cert.png'
import JavascriptCert from '../images/javascript-cert.png'
import PythonCert from '../images/python-cert.png'
import BigDataCert from '../images/big-data.png'

import ScrollTrigger from "gsap/ScrollTrigger"

import { gsap } from "gsap"


const About = () => {

    const comp = useRef()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from(comp.current, { scrollTrigger: '.about-title', duration: 1, x: '-200px', opacity: 0 })
        gsap.from('.text-fragment', { scrollTrigger: '.about-title', duration: 1, x: '-200px', delay: 0.2, opacity: 0, stagger: 0.1 })
        gsap.from('.title-fragment', { scrollTrigger: '.about-title', duration: 0.5, x: '-200px', delay: 0.5, opacity: 0 })
        gsap.from('.certs', { scrollTrigger: '.license-title', duration: 0.5, x: '-200px', opacity: 0, scale: 2, rotate: ('45deg'), stagger: 0.1 })
        gsap.from('.title-certs', { scrollTrigger: '.license-title', duration: 0.5, x: '-200px', opacity: 0 })
        return () => {
            //cleanup
        }
    }, [])

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row module align-items-left align-items-md-center bg-white">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="row justify-content-center about-content">
                            <div className="col-md-8 pb-5">
                                <h1 className="pb-2 about-title " ref={comp}>About</h1>
                                <p className="container fs-6 text-fragment">AS A COMPUTER SCIENTIST, I HAVE EXTENSIVE EXPERIENCE WORKING WITH
                                    <br /> GRAPHIC DESIGN, WEB DESIGN AND
                                    <br /> OOP (Oriented-Object Programming).</p>
                                <div className="d-flex justify-content-center">
                                    <hr className="text-light" width="250px" />
                                </div>
                                <h2 className="pb-4 pt-5 title-fragment">Web Development Languages</h2>
                                <div className="progress text-fragment">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width:'80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">PHP 80%</div>
                                </div><br />
                                <div className="progress text-fragment">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width:'90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT 90%</div>
                                </div><br />
                                <div className="progress text-fragment">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width:'75%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">PYTHON 75%</div>
                                </div><br />
                                <div className="progress text-fragment">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width:'45%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">NODE JS 45%</div>
                                </div><br />
                                <div className="progress text-fragment">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width:'85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">SQL 85%</div>
                                </div><br />
                                <div className="progress text-fragment">
                                    <div className="progress-bar bg-secondary" role="progressbar" style={{ width:'75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">NO SQL 75%</div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="col-12 col-lg-12 col-xl-5 pt-5 pb-5" >
                        <div className="row align-items-md-center experience-content" style={{ height: "100%" }}>
                            <h2 className="text-fragment">FRAMEWORKS</h2>
                            <div className="col-6 col-md-2 col-lg-2 col-xl-2 text-fragment p-5 p-lg-5 p-xl-0">
                                <img src={ LaravelLogo } className="img-fluid" alt="Laravel" title="Laravel"/> <br /> <span>Laravel</span>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 col-xl-2 text-fragment p-5 p-lg-5 p-xl-0">
                                <img src={ ReactLogo } className="img-fluid" alt="React JS" title="React JS"/> <br /> <span>React JS</span>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 col-xl-2 text-fragment p-5 p-lg-5 p-xl-0">
                                <img src={ WordpressLogo } className="img-fluid" alt="Wordpress" title="Wordpress"/> <br /> <span>Wordpress</span>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 col-xl-2 text-fragment p-5 p-lg5 p-xl-0">
                                <img src={ ThreeLogo } className="img-fluid" alt="Three JS" title="Three JS"/> <br /> <span>Three JS</span>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 col-xl-2 text-fragment p-5 p-lg-5 p-xl-0">
                                <img src={ NodeLogo } className="img-fluid" alt="Node JS" title="Node JS"/> <br /> <span>Node JS</span>
                            </div>
                            <div className="col-6 col-md-2 col-lg-2 col-xl-2 text-fragment p-5 p-lg-5 p-xl-0">
                                <img src={ DJangoLogo } className="img-fluid" alt="DJango" title="DJango"/> <br /> <span>DJango</span>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="col-12 pb-5 about-content">
                <div className="row">
                    <h2 className="pb-4 license-title text-center title-certs">LICENSES & CERTIFICATES</h2>
                    <div className="container pb-5">
                        <div className="row justify-content-center">
                            <div className="col-6 col-md-2 pb-4 certs">
                                <a href="https://www.credential.net/9352a460-da74-4721-8a37-a6c99de0f336" target="_blank" rel="noopener noreferrer">
                                    <img src={ FullStackCert } width="75%" className="img-fluid" alt="Laravel" title="Full Stack Web Developer"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-2 certs">
                                <a href="https://www.credential.net/3fd2da8d-0612-44f2-aa9f-8bdbddb03520" target="_blank" rel="noopener noreferrer">
                                    <img src={ JavascriptCert } width="75%" className="img-fluid" alt="React JS" title="Javascript Full Stack Developer"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-2 certs">
                                <a href="https://www.udemy.com/certificate/UC-40907c73-87b9-4829-adfc-d469cfd79c39" target="_blank" rel="noopener noreferrer">
                                    <img src={ PythonCert } width="75%" className="img-fluid" alt="Wordpress" title="Python Developer"/>
                                </a>
                            </div>
                            <div className="col-6 col-md-2 certs">
                                <a href="https://www.credential.net/6f056d27-bdd9-4578-9f32-c11df7bcc306" target="_blank" rel="noopener noreferrer">
                                    <img src={ BigDataCert } width="75%" className="img-fluid" alt="Node JS" title="Big Data Certified"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About