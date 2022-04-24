import React, { useEffect, useState } from 'react'
import '../CSS_Style/Profile.css'
// import Navbar from '../Components/Navbar'
// import Navbar2 from '../Components/Navbar2'
import axios from 'axios'
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const ProfileEdit = () => {

    const [data, setData] = useState('')
    const id = sessionStorage.getItem('uuid')

    const values = async () => {
        try {
            await axios
                .get(`http://153.92.5.193:3600/account/profile/${id}`)
                .then(res => {
                    setData(res.data.data)
                    // console.log(res)
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        values()
    }, [])



    return (
        <div className='font-serif text-white mt-32 mb-20'>
            <h1 className='text-center text-5xl mb-4'>Account</h1>
            <div className='xl:ml-96 ml-32 mb-8'>
                <img className='rounded-full md:w-56 w-36 xl:ml-64 md:ml-40' src={logo} alt='' />
            </div>
            <div className="xl:ml-72 xl:mr-72 ml-6 mr-8">
                <div className='border border-black container'>
                    <h3 className='mb-2 mt-3 xl:ml-44 ml-20 text-xl'>Profile Details</h3>
                    <hr />
                    <div className="grid grid-cols-3 gap-32 xl:ml-40 md:ml-20 ml-4 md:text-lg text-xs">
                        <div className="">
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Full Name</h2>
                            <h2 className='m'>Email ID</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Mobile Number</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Emergency Contact</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Emergency Contact Relation</h2>
                            <h2 className='m'>Gender</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Blood Group</h2>
                            <h2 className='m'>Date of Birth</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Accident Insurance Number</h2>
                            <h2 className='m'>Occupation</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Facebook Id</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Instagram Id</h2>
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>Twitter Id</h2>
                            <h2 className='m'>Linkedin Id</h2>
                            <h2 className='m'>About You</h2>
                        </div>
                        <div className="col-span-2 mr-40">
                            <h2 className='m' style={{ whiteSpace: 'nowrap' }}>{data.fname + " " + data.lname}</h2>
                            <h2 className='m'>{data.email}</h2>
                            <h2 className='m'>{data.phone_number}</h2>
                            <h2 className='m'>{data.emergency_contact}</h2>
                            <h2 className='m'>{data.relation_emergency_contact}</h2>
                            <h2 className='m'>{data.gender}</h2>
                            <h2 className='m'>{data.blood_group}</h2>
                            <h2 className='m'>{data.date_of_birth}</h2>
                            <h2 className='m'>{data.accident_insurance_number}</h2>
                            <h2 className='m'>{data.occupation}</h2>
                            <a href={data.facebook_link}><h2 className='m'>{data.facebook_link}</h2></a>
                            <a href={data.insta_link}><h2 className='m'>{data.insta_link}</h2></a>
                            <a href={data.twitter_link}><h2 className='m'>{data.twitter_link}</h2></a>
                            <a href={data.linkdin_link}><h2 className='m'>{data.linkdin_link}</h2></a>
                            <h2 className='m'>{data.about_you}</h2>
                        </div>
                    </div>
                    <Link to='/profile'>
                        <button className='btn bg-orange-600 py-2 xl:px-40 px-6 xl:ml-72 ml-0 mb-8 text-lg text-white'>Save</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default ProfileEdit;