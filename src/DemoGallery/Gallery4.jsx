import React from 'react'
import { Link } from 'react-router-dom';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";


function Gallery4() {
    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <div className='m-4'>
                    <div>
                        <h1 className='uppercase text-3xl font-serif font-bold text-white text-center mb-10'>Welcome to our Gallery</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />

                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Wintry Mountain Landscape"
                            />
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Mountains in the Clouds"
                            />

                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                            />
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Waves at Sea"
                            />

                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                className="w-100 shadow-1-strong rounded mb-4"
                                alt="Yosemite National Park"
                            />
                        </div>
                        <div>
                            <Link to='/gallery'>
                                <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Back Gallery</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SRLWrapper>
        </SimpleReactLightbox >
    )
}

export default Gallery4