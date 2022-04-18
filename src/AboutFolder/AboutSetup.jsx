import React from 'react'
import '../CSS_Style/about.css'
import aboutpic from '../images/aboutpic.jpg'
import closeButton from '../images/x-circle-fill.svg'
import facebookimg from '../images/facebookimg.jpeg';
import instagramimg from '../images/instagramimg.jpeg';
import linkedinimg from '../images/linkedinimg.jpeg';
import twitterimg from '../images/twitterimg.jpeg';


function AboutSetup() {
    return (
        <div>
            <div className='mt-20'>
                <div className='main-about mb-32'>
                    <div className='AboutUsHeading text-white'>
                        <h2 className='font-serif'>About Us</h2>
                    </div>
                    <div className='about-content text-white'>
                        <h4 className='font-serif text-lg'>
                            The name of the community- <span className='font-bold'>CYCLOLOGY INDIA</span> is derived from the two words <span>'cycle'</span> and 'logy'
                            which means the knowledge of cycling. The word Cyclology stands for everything that
                            cycling is and what we can achieve on a cycle.
                            For this reason our tagline is <span className='font-bold'>RIDE EXPLORE INSPIRE</span> .
                            The whole aim of Cyclology team is to celebrate sheer Joy of
                            cycling coupled with  exploring with the help of cycling, reaching far off places,
                            educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                            The logo uses the color of the sky and the earth at different times of the day, symbolizing that
                            cycling is well connected with both and can be done at any time of the day. We have made sure
                            to keep the structure of the cycling frame as simple as possible  because Cyclology India is for
                            everyone whether you are an adventurer on your MTB or a speed racer or an individual who is in
                            love with cycles and exploring every nook and cranny on them and maintaining a healthy sustainable lifestyle.
                        </h4>
                    </div>
                    <div className='founder-member-pic mt-20 md:ml-40 ml-24'>
                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image1' data-bs-toggle="modal" data-bs-target="#exampleModal1"></img>
                                <p className='text-xl font-serif mt-3'>Arnab Patra</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/CycloLogyIndia/' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/company/cyclologyindia' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image1' data-bs-toggle="modal" data-bs-target="#exampleModal1"></img>
                                <p className='text-xl font-serif mt-3'>Pinaki Ganguly</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/CycloLogyIndia/' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/company/cyclologyindia' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image1' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 1

                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full' alt='image3' data-bs-toggle="modal" data-bs-target="#exampleModal3"></img>
                                <p className='text-xl font-serif mt-3'>Aritra Bandyopadhyay</p>
                                <p className='text-xl font-serif mb-2'>CEO, Founder Member</p>
                                <div className='flex space-x-4 footer mt-3 mb-4'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/CycloLogyIndia/' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/company/cyclologyindia' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image3' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 3
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                the cycling frame as simple as possible because Cyclology India is for everyone whether you are an adventurer
                                                on your MTB or a speed racer or an individual
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='founder-member-pictures'>
                                <img src={aboutpic} className='rounded-full image1' alt='image4' data-bs-toggle="modal" data-bs-target="#exampleModal4"></img>
                                <p className='text-xl font-serif mt-3'>Subham Bhattacharya</p>
                                <p className='text-xl font-serif mb-3'>CEO, Founder Member</p>
                                <div className='flex space-x-4 footer'>
                                    <div className='img1'>
                                        <a href='https://www.facebook.com/CycloLogyIndia/' className='mt-2 img1'>
                                            <img className='rounded-full' src={facebookimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.strava.com/clubs/Cyclology' className='mt-2 img2'>
                                            <img className='rounded-t-xl rounded-b-xl' src={instagramimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'>
                                            <img className='rounded-full' src={twitterimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                    <div className='img1'>
                                        <a href='https://www.linkedin.com/company/cyclologyindia' className='mt-2'>
                                            <img className='rounded-full' src={linkedinimg} alt='' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-black text-white">
                                        <div className='Modal-image'>
                                            <button type="button" style={{ float: 'right' }} data-bs-dismiss="modal" aria-label="Close"><img className='w-8 mt-3 bg-white rounded-full' src={closeButton} alt=''></img></button>
                                            <img src={aboutpic} alt='about-image4' className='rounded-full md:w-52 w-40'></img>
                                            <p className='mt-4'>
                                                Person 4
                                                places, educate about cycling and inspire communities to cycle so that everyone can reap its benefits.
                                                The logo uses the color of the sky and the earth at different times of the day, symbolizing that cycling
                                                is well connected with both and can be done at any time of the day. We have made sure to keep the structure of
                                                who is in love with cycles and exploring every nook and cranny on them and maintaining a
                                                healthy sustainable lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSetup;