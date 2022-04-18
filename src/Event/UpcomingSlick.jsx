import React, { Component } from "react";
import Slider from "react-slick";
import '../CSS_Style/slick.css'

import pic_1 from '../images/cyclo enduro-645.430 (1).jpg'
import pic_2 from '../images/cyclo plogging-645.430 (1).jpg'
import pic_3 from '../images/cyclo touring-645.430 (1).jpg'
import pic_4 from '../images/cyclo firechat-645.430 (1).jpg'

import { Link } from "react-router-dom";


export default class UpcomingSlick extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="ml-10 mr-10 mt-14 mb-10" id='upcomingevent'>
                <h2 className="text-white text-bold text-4xl uppercase mb-6 text-center font-serif">Upcoming Event</h2>
                <Slider {...settings}>
                    <div className="border-2 text-center border-gray-800 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-lg hover:shadow-[#1814ff] pt-2 pl-2 pr-2">
                        <img src={pic_1} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_2} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_3} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_4} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_1} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_2} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_3} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                    <div className="border-2 text-center border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] pl-2 pr-2 pt-2">
                        <img src={pic_4} alt="" className="rounded-t-lg" style={{ height: 'auto', width: '1000px' }} />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            Coming Soon..
                        </h3>
                        <p className="text-white font-serif">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum exercitationem consequatur delectus quaerat mollitia et minima.
                        </p>
                        <Link to='/event'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Coming soon</button>
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}