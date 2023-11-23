import React from 'react'
import Navbar from './Navbar'

interface EmailType {
    email: string
}

function Welcome(email: EmailType) {
    return (
        <div className='w-[80vw] ml-auto mr-auto'>
        <div>
            <Navbar />
        </div>
        <div className=' w-[80vw] ml-auto mr-auto'>
            <h1 className=' text-[30px] py-4'>Thank You !</h1>
            <p className='py-4'>You're now registered for Wizard Tech .</p>
            <p className='py-4'>we 've sent more details to {email.email}</p>
        </div>
    </div>
    )
}

export default Welcome