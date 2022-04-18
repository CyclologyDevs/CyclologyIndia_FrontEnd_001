import React from 'react'
import pic_1 from '../Gimages/img6.jpg'
import pic_2 from '../Gimages/pic_23.JPG'
import pic_3 from '../Gimages/pic_24.JPG'
import pic_4 from '../Gimages/img_4.jpg'
import pic_5 from '../Gimages/img_5.jpg'
import pic_6 from '../Gimages/img_7.jpg'
import pic_7 from '../Gimages/img_8.jpg'
import pic_8 from '../Gimages/img_6.jpg'
import pic_9 from '../Gimages/img_9.jpg'
import { Link } from "react-router-dom";


function GallerySetup() {

    return (
        <div className="container-fluid mt-32 mb-4">
            <h1 className='uppercase text-3xl font-serif font-bold text-white text-center mb-10' id='photo'>Welcome to our Gallery</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <Link to='/gallery1'>
                        <div className="carousel-item active shadow-none new">
                            <img src={pic_1} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                            <div className='overlay'>
                                <div className='text-center content'>
                                    <h4 className='text-white md:text-3xl  mt-28' style={{ fontFamily: 'Sofia' }}>11+ Photos</h4>
                                </div>
                            </div>
                            <div className="carousel-caption d-block d-md-block">
                                <h5 className='mb-8 text-2xl font-serif uppercase font-bold'>Cyclology Ploging</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_2} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold uppercase font-bold'>Cyclology Touring</h5>
                            <Link to='/gallery2'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_3} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold font-bold'>Cyclology Enduro</h5>
                            <Link to='/gallery3'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_5} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold font-bold'>Cyclology Firechat</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_4} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery1'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_6} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery2'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_9} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_8} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <img src={pic_7} className="d-block w-100" style={{ height: "45vh", width: "100%" }} alt="..." />
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className='uppercase text-3xl font-serif font-bold text-white text-center mt-20 mb-10' id='video'>Videos</h1>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/KV56ySNceKE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/H2BqIzvvO1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/UzF2GFeXes8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="carousel-item active shadow-none">
                        <iframe style={{ height: "45vh", width: "100%" }} src="https://www.youtube.com/embed/_nU85_ntz4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 className='mb-2 text-2xl font-serif text-bold'>Coming Soon...</h5>
                            <Link to='/gallery4'>
                                <button className="flex mx-auto font-serif text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">See more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallerySetup