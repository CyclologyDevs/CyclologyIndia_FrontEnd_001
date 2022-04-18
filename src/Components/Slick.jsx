import React, { Component } from "react";
import Slider from "react-slick";
import '../CSS_Style/slick.css'

import pic_1 from '../images/cyclo enduro-645.430 (1).jpg'
import pic_2 from '../images/cyclo plogging-645.430 (1).jpg'
import pic_3 from '../images/cyclo touring-645.430 (1).jpg'
import pic_4 from '../images/cyclo firechat-645.430 (1).jpg'
import { Link } from "react-router-dom";


export default class Slick extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
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
            <div className="ml-10 mr-10 mt-14">
                <h2 className="text-white text-bold text-4xl uppercase mb-6 text-center font-serif"> Some Features </h2>
                <Slider {...settings}>
                    <div className="border-2 border-gray-800 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_1} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO PLOGGING
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event in which the riders go to some places for cleaning them. For example, 'THE BAGBAZAR GHAT' is cleaned on every Tuesday at 6:30am.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_2} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO TOURING
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event in which the riders travel to far off places with the help of a bicycle, stays there some days and then returns back to their original location cycling.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_3} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO FIRECHAT
                        </h3>
                        <p className="text-white font-serif">
                            'CYCLO FIRECHAT' is a cycling event that's done with some eminent person. Here he rides long distance by cycling and connects with the other team members via video call.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_4} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO ENDURO
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event which is done at anytime. Here the riders are given long distances such as 100kms- 200kms- 300kms- 400kms or more for cycling.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_1} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO PLOGGING
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event in which the riders go to some places for cleaning them. For example, 'THE BAGBAZAR GHAT' is cleaned on every Tuesday at 6:30am.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_2} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO PLOGGING
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event in which the riders go to some places for cleaning them. For example, 'THE BAGBAZAR GHAT' is cleaned on every Tuesday at 6:30am.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_3} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO PLOGGING
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event in which the riders go to some places for cleaning them. For example, 'THE BAGBAZAR GHAT' is cleaned on every Tuesday at 6:30am.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 box-border bg-transparent rounded-lg hover:border-indigo-700 hover:shadow-xl hover:shadow-[#1814ff] p-3">
                        <img src={pic_4} alt="" className="" />
                        <h3 className="font-bold text-white font-serif text-2xl mt-2 mb-2">
                            CYCLO PLOGGING
                        </h3>
                        <p className="text-white font-serif">
                            It is a cycling event in which the riders go to some places for cleaning them. For example, 'THE BAGBAZAR GHAT' is cleaned on every Tuesday at 6:30am.
                        </p>
                        <Link to='/CYCLOPLOGGING'>
                            <button className="flex mx-auto font-serif mt-3 mb-2 text-white py-2 px-6 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}