import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import img1 from '../Gimages/pic_21.jpg'
import img2 from '../Gimages/pic_22.jpg'
import img3 from '../Gimages/pic_11.jpg'
import img4 from '../Gimages/pic_14.jpeg'
import img5 from '../Gimages/pic_15.jpeg'
import { Link } from 'react-router-dom';




function Gallery() {
    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <div className="container-fluid mt-28 mb-4">
                    <h1 className='uppercase text-3xl font-serif font-bold text-white text-center mb-10'>Cyclo Enduro Gallery</h1>
                    <div class="container grid grid-cols-3 gap-2 mx-auto">
                        <div class="w-full rounded">
                            <div className="carousel-item active shadow-none">
                                <div className="flex flex-wrap content-center new">
                                    <img src={img1} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="isdviuhk jkkj" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-5xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full rounded">
                            <div className="carousel-item active shadow-none">
                                <div className="flex flex-wrap content-center new">
                                    <img src={img2} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="isdviuhk jkkj" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-5xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full rounded">
                            <div className="carousel-item active shadow-none">
                                <div className="flex flex-wrap content-center new">
                                    <img src={img3} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="isdviuhk jkkj" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-5xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full rounded">
                            <div className="carousel-item active shadow-none">
                                <div className="flex flex-wrap content-center new">
                                    <img src={img4} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="isdviuhk jkkj" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-5xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full rounded">
                            <div className="carousel-item active shadow-none">
                                <div className="flex flex-wrap content-center new">
                                    <img src={img5} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="isdviuhk jkkj" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-5xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full rounded">
                            <div className="carousel-item active shadow-none">
                                <div className="flex flex-wrap content-center new">
                                    <img src={img2} className="mx-auto " style={{ height: 'auto', width: '100%' }} alt="isdviuhk jkkj" />
                                    <div className='overlay'>
                                        <div className='text-center content'>
                                            <h4 className='text-white md:text-5xl' style={{ fontFamily: 'Sofia' }}>First Live Project</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="w-full rounded">
                            <div className="">
                                <img src={img8} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <div class='row'>
                            <div class="w-full rounded">
                                <div className="">
                                    <img src={img9} className="d-block w-100" alt="..." />
                                </div>
                                <div className="mt-2">
                                    <img src={img6} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="w-full rounded">
                            <div className="">
                                <img src={img10} className="d-block w-100" alt="..." />
                            </div>
                        </div> */}
                    </div>
                    <div className='mt-20 mb-20'>
                        <Link to='/gallery'>
                            <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Back Gallery</button>
                        </Link>
                    </div>
                </div>
            </SRLWrapper>
        </SimpleReactLightbox >
    )
}

export default Gallery