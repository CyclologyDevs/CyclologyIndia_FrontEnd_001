import React from 'react'
// import { Link } from 'react-router-dom'
import fimage1 from '../images/pic_4.jpg';
import fimage2 from '../images/pic_2.jpg';
import fimage3 from '../images/pic_3.jpg';
import fimage4 from '../images/cyclo firechat-645.430 (1).jpg'
import fimage5 from '../images/cyclo plogging-645.430 (1).jpg'
import fimage6 from '../images/cyclo touring-645.430 (1).jpg'
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div> {/* Carousel */}

            <div id="carouselExampleCaptions" className="carousel slide container mt-20 mb-6" style={{ height: "90%", width: "90%" }} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner rounded-lg">
                    <div className="carousel-item active">
                        <Link to='/event'>
                            <img src={fimage1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 1</h5>
                                <p className='font-serif text-justify md:text-xl text-xs'>This is a 100kms cycling match. The cyclists have to start the match sharp at 6:00am keeping their strava account on. The rider who will be able to complete the match in less time will be the winner of the event.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event'>
                            <img src={fimage2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 2</h5>
                                <p className='font-serif text-xs text-justify md:text-xl'>This is a 500kms cycling match. The cyclists have to start the match sharp at 12:00pm keeping their strava account on. The rider who will be able to complete the match in less time will be the winner of the event.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event'>
                            <img src={fimage3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 3</h5>
                                <p className='font-serif text-xs text-justify md:text-xl'>This is a 300kms cycling match. The cyclists have to start the match sharp at 4:00pm keeping their strava account on. The rider who will be able to complete the match in less time will be the winner of the event.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event'>
                            <img src={fimage4} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 4</h5>
                                <p className='font-serif text-xs text-justify md:text-xl'>This is a 300kms cycling match. The cyclists have to start the match sharp at 4:00pm keeping their strava account on. The rider who will be able to complete the match in less time will be the winner of the event.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event'>
                            <img src={fimage5} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='font-serif font-bold text-black text-2xl mb-2 md:text-5xl'>Event 5</h5>
                                <p className='font-serif text-xs text-justify md:text-xl'>This is a 300kms cycling match. The cyclists have to start the match sharp at 4:00pm keeping their strava account on. The rider who will be able to complete the match in less time will be the winner of the event.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to='/event'>
                            <img src={fimage6} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='font-serif font-bold text-black text-2xl mb-2 md:text-5xl'>Event 6</h5>
                                <p className='font-serif text-xs text-justify md:text-xl'>This is a 300kms cycling match. The cyclists have to start the match sharp at 4:00pm keeping their strava account on. The rider who will be able to complete the match in less time will be the winner of the event.</p>
                            </div>
                        </Link>
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
            </div>
        </div>
    )
}

export default Carousel