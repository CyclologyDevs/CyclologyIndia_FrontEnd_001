import React from 'react'
import pic_1 from '../images/cyclo enduro-645.430 (1).jpg'
import pic_2 from '../images/cyclo plogging-645.430 (1).jpg'
import pic_3 from '../images/cyclo touring-645.430 (1).jpg'
import pic_4 from '../images/cyclo firechat-645.430 (1).jpg'
import { Link } from 'react-router-dom'

function ScrollCards() {
    return (
        <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start pb-4 pt-20 pl-8"
        >
            <div
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border-2 hover:border-indigo-700 rounded-lg"
            >
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9 object-center">
                        <img
                            className="object-cover shadow-md hover:shadow-xl rounded-lg pl-10 pt-6"
                            src={pic_2}
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="px-4 py-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="font-bold text-white font-serif text-3xl mb-2">
                                CYCLO PLOGGING
                            </h3>
                        </div>
                        <div className="text-lg">
                            <p className="text-white font-serif">
                                It is a cycling event in which the riders go to some places for cleaning them. For example, 'THE BAGBAZAR GHAT' is cleaned on every Tuesday at 6:30am.
                            </p>
                            <p className="font-medium text-sm text-indigo-600 mt-2">
                                <Link to='/CYCLOPLOGGING'>
                                    <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border-2 hover:border-indigo-700 rounded-lg"
            >
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="object-cover shadow-md hover:shadow-xl rounded-lg pl-10 pt-6"
                            src={pic_3}
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="px-4 py-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="font-bold text-white font-serif text-3xl mb-2">
                                CYCLO TOURING
                            </h3>
                        </div>
                        <div className="text-lg">
                            <p className="text-white font-serif">
                                It is a cycling event in which the riders travel to far off places with the help of a bicycle, stays there some days and then again returns back to their original location cycling.
                            </p>
                            <p className="font-medium text-sm text-indigo-600 mt-2">
                                <Link to='/CYCLOTOURING'>
                                    <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border-2 hover:border-indigo-700 rounded-lg"
            >
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="object-cover shadow-md hover:shadow-xl rounded-lg pl-10 pt-6"
                            src={pic_4}
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="px-4 py-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="font-bold text-white font-serif text-3xl mb-2">
                                CYCLO FIRECHAT
                            </h3>
                        </div>
                        <div className="text-lg">
                            <p className="text-white font-serif">
                                'CYCLO FIRECHAT' is a cycling event that's done with some eminent person. Here he rides long distance by cycling and connects with the other team members via video call.
                            </p>
                            <p className="font-medium text-sm text-indigo-600 mt-2">
                                <Link to='/CYCLOFIRECHAT'>
                                    <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border-2 hover:border-indigo-700 rounded-lg"
            >
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="object-cover shadow-md hover:shadow-xl rounded-lg pl-10 pt-6"
                            src={pic_1}
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="px-4 py-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="font-bold text-white font-serif text-3xl mb-2">
                                CYCLO ENDURO
                            </h3>
                        </div>
                        <div className="text-lg">
                            <p className="text-white font-serif">
                                It is a cycling event which is done at anytime. Here the riders are given long specific distances such as 100kms- 200kms- 300kms- 400kms- 500kms or more for cycling.
                            </p>
                            <p className="font-medium text-sm text-indigo-600 mt-2">
                                <Link to='/CYCLOENDURO'>
                                    <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border-2 hover:border-indigo-700 rounded-lg"
            >
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="object-cover shadow-md hover:shadow-xl rounded-lg pl-10 pt-6"
                            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="px-4 py-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="font-bold text-white font-serif text-3xl mb-2">
                                Some title goes here
                            </h3>
                        </div>
                        <div className="text-lg">
                            <p className="text-white font-serif">
                                It is a cycling event in which the riders travel to far off places with the help of a bicycle, stays there some days and then again returns back to their original location cycling.
                            </p>
                            <p className="font-medium text-sm text-indigo-600 mt-2">
                                <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border-2 hover:border-indigo-700 rounded-lg"
            >
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9">
                        <img
                            className="object-cover shadow-md hover:shadow-xl rounded-lg pl-10 pt-6"
                            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                            alt=""
                            style={{ width: "90%" }}
                        />
                    </div>
                    <div className="px-4 py-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="font-bold text-white font-serif text-3xl mb-2">
                                Some title goes here
                            </h3>
                        </div>
                        <div className="text-lg">
                            <p className="text-white font-serif">
                                It is a cycling event in which the riders travel to far off places with the help of a bicycle, stays there some days and then again returns back to their original location cycling.
                            </p>
                            <p className="font-medium text-sm text-indigo-600 mt-3">
                                <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollCards