import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const About:React.FC = () => {
    return (
        <div className='w-[80vw] ml-auto mr-auto '>
            <div>
                <Navbar />
            </div>
            <div className=''>
                <div className=' w-[80vw] ml-auto mr-auto'>
                    <h1 className=' text-[30px] py-2'>Technology and Business Solutions</h1>
                    <p>Wizard Tech s the leading source of
                        secure, uly custormizable technology and
                        business Solutions. We cater o those who need scalable
                        results that are sustainable for their company and the planet
                        Wih the ever-evolving technology landscane, we wantfo be your
                        go-to source for business technology</p>
                    <p>
                        Our mission is fo pravide technology
                        and business-driven salufions that wark seamlessly
                        with your company, allowing your employees, partners,
                        and customers to engage in oualiy interactions that eaci
                        o scalable growth We consistently workawards being the
                        premier provider of emviranmentally sustainable technology
                        salufions that connectthe
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About
