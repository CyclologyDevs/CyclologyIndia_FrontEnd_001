import React from 'react';
// import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BlogSetUp from '../Blog/BlogSetUp';
// import Navbar2 from '../Components/Navbar2'


function Blog() {

    // const Check = false;

    return (
        <div>
            {/* {Check ? <Navbar /> : <Navbar2 />} */}
            <BlogSetUp />
            <Footer />
        </div>
    )
}

export default Blog