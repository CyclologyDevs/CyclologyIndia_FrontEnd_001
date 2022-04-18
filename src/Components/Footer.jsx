
import React from 'react';
import '../CSS_Style/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../images/bottomLogo.png'
import arrow from '../images/arrow.svg'



function Footer() {
  return (
    <div>
      <div className='footer-container font-serif'>
        <div className='footer-links cursor-pointer'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2 className='text-2xl  font-bold'>About Us</h2>

              <Link to='/OurMission' className='link link-underline link-underline-black'>Our Mission</Link>
              <Link to='/OurVision' className='link link-underline link-underline-black'>Our Vision</Link>
              <Link to='/CoreValues' className='link link-underline link-underline-black'>Core Values</Link>
              <Link to='/Bio' className='link link-underline link-underline-black'>Bio</Link>
            </div>
            <div className='footer-link-items'>
              <h2 className='text-2xl font-bold'>Contact Us</h2>
              <Link to='/Contact' className='link link-underline link-underline-black'>Contact</Link>
              <Link to='/Support' className='link link-underline link-underline-black'>Support</Link>
              <Link to='/Partners' className='link link-underline link-underline-black'>Partners</Link>
              <Link to='/Sponsorships' className='link link-underline link-underline-black'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2 className='text-2xl font-bold'>Help</h2>
              <a href='https://youtu.be/tT2gI7Ct_Kc' className='link link-underline link-underline-black'>How to use Strava</a>

            </div>
            <div className='footer-link-items'>
              <h2 className='text-2xl font-bold'>Social Media</h2>
              <a href='https://www.facebook.com/CycloLogyIndia/'>
                <svg fill="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" alt="Telegram" title="Telegram"></path>
                </svg>
              </a>
              <a href=' https://www.strava.com/clubs/Cyclology' className='mt-2'>
                <img srcSet="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-strava-mobile-app-and-website-connect-runners-and-cyclists-logo-bold-tal-revivo.png 2x" alt="icon" loading="lazy" width="16" height="16" fill="currentColor" strokeWidth="2" className="w-5 h-5 bg-white bi bi-telegram" viewBox="0 0 15 15" />

                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" stroke-width="2" className="w-5 h-5 rounded-xl" viewBox="0 0 15 15">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                </svg> */}
              </a>
              <a href='https://www.instagram.com/cyclologyindia/' className='mt-2'><svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
              </a>
              <a href='https://www.linkedin.com/company/cyclologyindia' className='mt-2'><svg fill="currentColor" stroke="currentColor" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24" alt="Telegram" title="Telegram">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
              </a>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                <img className='rounded-full' style={{ width: "200px" }} src={logo} alt='...'></img>
              </Link>
            </div>
            <h1 className='website-rights text-center font-serif font-bold text-base mr-24'>Cyclology © 2022</h1>
            <div style={{ align: 'right' }} className='content-end animate-bounce hover:animate-bounce' data-bs-toggle="tooltip" data-bs-placement="top" title="Back to top">
              <a href="#top" data-after="contact" className='animate-bounce hover:animate-bounce'>
                <img style={{ align: 'right' }} className='justify-items-end w-10 bg-white rounded-full' src={arrow} alt='' />
              </a>
            </div>
          </div>

        </section>
      </div>

    </div>
  )
}

export default Footer