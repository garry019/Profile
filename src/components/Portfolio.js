/* import Work0 from '../images/work-0.jpg'
import Work1 from '../images/work-1.jpg'
import Work2 from '../images/work-2.jpg'
import Work3 from '../images/work-3.jpg'
import Work4 from '../images/work-4.jpg' */

const Portfolio = () => {
    return (
        <div className="row portfolio-content">
            
            
            {/* <div id="carouselExampleCaptions" className="carousel slide px-0" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 0"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Work2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>CULTURA CAMPER</h5>
                                <p>LANDING PAGE DESIGN</p>
                                <a href={'https://timemachinevr.co/landings/camperizacion/'} target="_blank" rel="noreferrer"><span className="liveButton"><i className="fa fa-eye" aria-hidden="true"></i> LIVE</span></a>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Work3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>YOUNG ACCESORIOS</h5>
                                <p>GRAPHIC DESIGN, WEB DESIGN & DEVELOPMENT</p>
                                <a href={'https://youngaccesorios.com/'} target="_blank" rel="noreferrer"><span className="liveButton"><i className="fa fa-eye" aria-hidden="true"></i> LIVE</span></a>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Work1} className="d-block w-100 img-fluid" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>TIME MACHINE AGENCY</h5>
                                <p>GRAPHIC DESIGN & WEB DESIGN</p>
                                <a href={'https://timemachinevr.co/'} target="_blank" rel="noreferrer"><span className="liveButton"><i className="fa fa-eye" aria-hidden="true"></i> LIVE</span></a>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Work0} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>INGRAM MICRO</h5>
                                <p>Cisco Partner | Quote System | Laravel Framework</p>
                                <a href={'/#work'} rel="noreferrer"><span className="liveButton"><i className="fa fa-eye" aria-hidden="true"></i> LIVE</span></a>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Work4} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>GRUPO 5G</h5>
                                <p>Reservation & Customers System | PHP</p>
                                <a href={'/#work'} rel="noreferrer"><span className="liveButton"><i className="fa fa-eye" aria-hidden="true"></i> LIVE</span></a>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}

            <video className="px-0" autoPlay={true} muted loop >
                <source src="/video/portfolio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Portfolio