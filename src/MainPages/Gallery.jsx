import React from 'react'
// import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import GallerySetup from '../DemoGallery/GallerySetup';
// import Navbar2 from '../Components/Navbar2'


function Gallery() {

  // const Check = false;

  return (
    <div>
      {/* {Check ? <Navbar /> : <Navbar2 />} */}
      <GallerySetup />
      <Footer />
    </div>
  )
}

export default Gallery