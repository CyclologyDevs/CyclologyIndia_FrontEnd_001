import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='main' className='font-serif'>
            <div className='pr-heading name font-serif'>
                <h1><span>RIDE </span><span className='font-serif text-white'> EXPLORE </span><span className='font-serif text-white'> INSPIRE</span> WITH <span className='md:text-6xl text-4xl'>CYCLOLOGY</span></h1>
                {/* <p className='details font-serif'>WI<span className='font-bold'>TH CYCLOL</span>OGY</p> */}
                <div className='pr-btns'>
                    <Link to='/login' className='pr-btn font-serif hover:animate-bounce'>JOIN US</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;