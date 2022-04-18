import React from 'react';
import { Link } from 'react-router-dom';
import aboutimage from '../images/aboutimg.jpg'

function About() {
    return (
        <section className="text-gray-600 body-font font-serif">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded sm:ml-15 md:ml-5 ml-0" alt="hero" src={aboutimage} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-[#1814ff]">Learn more about
                    </h1>
                    <p className="mb-8 leading-relaxed text-white text-xl text-left"><span className="text-[#1814ff] font-bold" >Cyclology India.</span> It is a group of Cycling enthusiasts, whose primary goal is to spread awareness towards cycling and develop a large community of cyclists.</p>
                    <div className="flex">
                        <Link to='/mainabout'>
                            <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About


// import { text } from '@fortawesome/fontawesome-svg-core';
// import React from 'react';
// import aboutimage from '../images/pic_4.jpg'

// function About() {
//     return (
//         <div id='about'>
//             <div classNameName='about-image font-serif pt-30'>
//                 <img src={aboutimage} alt='' />
//             </div>
//             <div classNameName='about-text'>
//                 <h1 classNameName='font-serif'>Learn more about</h1>
//                 <p classNameName='font-serif'><span classNameName="text-blue-800 font-bold text-2xl" >Cyclology India.</span> It is a group of Cycling enthusiasts, whose primary goal is to spread awareness towards cycling and develop a large community of cyclists.</p>
//                 <button classNameName=' font-serif'><Link to="/home/dhrubajit/project-cyc-demo2/src/empty/empty1.jsx"> Read More</Link></button>
//             </div>
//         </div>
//     )
// }

// export default About