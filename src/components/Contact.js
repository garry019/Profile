import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import ScrollTrigger from "gsap/ScrollTrigger"
import { gsap } from "gsap"

const Contact = () => {

    const form = useRef()

    const thanksView = () => {
        const thanksBox = document.querySelector('.email-sent')
        const contactBox = document.querySelector('.email-details')
        const contactForm = document.querySelector('.email-form')
        thanksBox.style.display = 'block'
        contactBox.style.display = 'none'
        contactForm.style.display = 'none'
        
    }

    const sendEmail = (e) => {
        e.preventDefault()
    
        const btnSend = document.getElementsByClassName('btn-send')
        const spiner = document.getElementsByClassName('formLoading')
        btnSend[0].style.display = 'none'
        spiner[0].style.display = 'block'

        emailjs.sendForm('service_em0gts8', 'template_sfpe8sb', form.current, 'vYFZ9TDuz6koe02HD')
            .then((result) => {
                spiner[0].style.display = 'none'
                thanksView()
                //navigate('/contact-form-sent', { state: { sent: true } })

            }, (error) => {
                spiner[0].style.display = 'none'
                btnSend[0].style.display = 'block'
                console.log(error)
            });

        e.target.reset()
    }

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from('.text-contact', { scrollTrigger: '.contact-content', duration: 0.5, x: '-200px', opacity: 0, stagger: 0.05 })
        return () => {
            //cleanup
        }
    }, []);

    return (
        <div className="row contact-content module pb-5">
            <div className="col-md-12">
                <h1 className="text-contact">Get in Touch<br /><br />
                    <small>Get your space suit ready and tell me your ideas to develop your dream application</small>
                </h1>
                <div className="d-flex justify-content-center text-contact pb-5">
                    <hr className="text-light" width="47%" />
                </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-8 text-light email-sent">
                <h2>THANK YOU, I GOT YOUR EMAIL</h2>
            </div>
            <div className="col-md-3 col-lg-2 text-light email-details">
                <h2 className="pb-2 contact-details text-contact">DETAILS</h2>
                <p className="contact-details-p text-contact">garry019@gmail.com <br /> +57 (1) 3026684002 <br /> BOGOTA - COLOMBIA</p>
            </div>
            <div className="col-md-5 col-lg-6 email-form">
                <form className="row g-3 text-start" ref={form} onSubmit={sendEmail}>
                    <div className="col-lg-6">
                        <label htmlFor="inputName" className="form-label text-contact">NAME</label>
                        <input type="text" className="form-control text-contact" id="inputName" name="inputName" required/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="inputEmail" className="form-label text-contact">EMAIL</label>
                        <input type="email" className="form-control text-contact" id="inputEmail" name="inputEmail" required/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="inputCountry" className="form-label text-contact">COUNTRY</label>
                        <input type="text" className="form-control text-contact" id="inputCountry" name="inputCountry" placeholder=""/>
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="inputCity" className="form-label text-contact">CITY</label>
                        <input type="text" className="form-control text-contact" id="inputCity" name="inputCity" placeholder="" required/>
                    </div>
                    <div className="col-6 col-lg-4">
                        <label htmlFor="inputPhone" className="form-label text-contact">PHONE NUMBER</label>
                        <input type="text" className="form-control text-contact" id="inputPhone" name="inputPhone" required/>
                    </div>
                    <div className="col-12 col-lg-12">
                        <label htmlFor="inputMessage" className="form-label text-contact">MESSAGE</label>
                        <textarea type="text" className="form-control text-contact" id="inputMessage" name="inputMessage" />
                    </div>
                    <div className="col-12">
                        <div className="form-check text-contact">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                                <label className="form-check-label text-light" htmlFor="gridCheck">
                                    I'M AGREE WITH TERMS
                                </label>
                        </div>
                    </div>
                    <div className="col-12 text-contact">
                        <button type="submit" className="btn btn-primary btn-send">SEND</button>
                        <img className="formLoading mx-auto" width="50px" height="50px" src="./img/spiner.gif" alt="" />
                    </div>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default Contact