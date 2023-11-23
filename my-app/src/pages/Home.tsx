import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home:React.FC = () => {
    return (
        <div className='w-[80vw] ml-auto mr-auto '>
            <div>
                <Navbar />
            </div>
            <div className=''>
                <div>
                    <img className='ml-auto mr-auto my-10' src="/images/img-main-653ee10fb7aba556407221.jpg" alt="" />
                </div>
                <div className=' w-[80vw] ml-auto mr-auto'>
                    <h1 className=' text-[30px] py-2'>Welcome to wizard Tech</h1>
                    <p>This is a fictitious company and conference create byamazon Corporation, or its affiliates, solely for the creation and development of educational training materials.Any resemblance to real products or services is purely coincidental.Information provided about the products or services is also fictitions and should not be construed as representative of actual products or services on the market in a similar product or service category</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
