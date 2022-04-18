import React from 'react'
// import Navbar from '../Components/Navbar'
import EventSetUp from '../Event/EventSetUp';
import Footer from '../Components/Footer';
import PreviousSlick from '../Event/PreviousSlick';
import UpcomingSlick from '../Event/UpcomingSlick';
import { Link } from "react-router-dom";
// import Navbar2 from '../Components/Navbar2'


function Event() {

    // const Check = false;

    return (
        <div>
            {/* {Check ? <Navbar /> : <Navbar2 />} */}
            <EventSetUp />
            <UpcomingSlick />
            <PreviousSlick />

            <div className='mt-40 mb-20'>
                <h1 className='text-white text-4xl text-center font-serif'>Checkout LeaderBoard</h1>
                <Link to='/weeklyboard'>
                    <button className="mt-2 mb-6 flex mx-auto font-serif text-white py-2 px-10 bg-[#1814ff] rounded-full text-xs md:text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Check</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Event