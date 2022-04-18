import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/event.jpeg';
import img2 from '../images/event.jpeg';
import img3 from '../images/event.jpeg';
// import '../CSS_Style/Event.css'


function EventSetUp() {
  return (
    <div id='top'>
      <div className='mb-10'>
        <div id="carouselExampleCaptions" className="carousel slide container mt-20 mb-7" style={{ height: "80%", width: "100%" }} data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner rounded-lg">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." style={{ height: '600px' }} />
              <div className='text-center content'>
                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 1</h5>
                <p className='font-serif text-xs text-justify md:text-xl text-blue-800'>This is a 300kms cycling match. winner of the event.</p>
                <Link to='/event1'>
                  <button className="mt-2 flex mx-auto font-serif text-white py-2 px-10 bg-[#1814ff] rounded-full text-xs md:text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">JOIN</button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." style={{ height: '600px' }} />
              <div className='text-center content'>
                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 2</h5>
                <p className='font-serif text-xs text-justify md:text-xl text-blue-800'>This is a 300kms cycling match. winner of the event.</p>
                <Link to='/event2'>
                  <button className="mt-2 flex mx-auto font-serif text-white py-2 px-10 bg-[#1814ff] rounded-full text-xs md:text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">JOIN</button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." style={{ height: '600px' }} />
              <div className='text-center content'>
                <h5 className='font-serif font-bold text-black text-2xl md:text-5xl mb-2'>Event 3</h5>
                <p className='font-serif text-xs text-justify md:text-xl text-blue-800'>This is a 300kms cycling match. winner of the event.</p>
                <Link to='/event3'>
                  <button className="mt-2 flex mx-auto font-serif text-white py-2 px-10 bg-[#1814ff] rounded-full text-xs md:text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">JOIN</button>
                </Link>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventSetUp