import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome';
import { AlertCircle, CheckCircle2 } from 'lucide-react'
const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [submit, setSubmit] = useState<boolean>(false)
    const [changer, setChanger] = useState<boolean>(false)
    const pattern = /[a-zA-Z0-9]+[/.]?([a-zA-Z0-9]+)?[/@][a-z]{3,9}[/.][a-z]{3,5}/g;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email: string = e.target.value
        if (pattern.test(email)) {
            if (e.nativeEvent.isTrusted) {
                setEmail(email)
            }
            setChanger(true)
        } else {
            setEmail('')
            setChanger(false)
        }
    }
    const handleSubmit = () => {
        if (email) {
            setSubmit(true)
        }
    }

    if (submit) {
        return (
            <>
                <Welcome email={email} />
            </>
        )
    }
    return (
        <div className='w-[80vw] ml-auto mr-auto'>
            <div>
                <Navbar />
            </div>
            <div className=' w-[80vw] ml-auto mr-auto'>
                <h1 className=' text-[30px] py-4'>Register for Wizard Tech</h1>
                <p className='py-4'>Make sure to grab your spot for this year's conference! We love technology and consistently
                    work towards being the premier provider of technolagy solutions and events that cannect the
                    world.
                </p>
                <div className=' mt-10'>
                    <div className=' flex justify-center'>
                        <div className=' w-[40%] '>
                            <div className=' '>
                                <div>
                                    <p>Email :</p>
                                </div>
                                <div className={changer ? 'flex border border-green-200 rounded-md shadow-md shadow-green-200' : 'flex border shadow-md shadow-red-200 border-red-200 rounded-md shadow-red-md'}>
                                    <div className=' w-[95%]'>
                                        <input defaultValue={email} onChange={(e) => handleChange(e)} type="text" name='email' className={'w-[100%] rounded-md outline-none h-8'} />
                                    </div>
                                    <div className={'h-8 py-1'}>
                                        {changer ? <CheckCircle2 color='green' /> : <AlertCircle color='red' />}
                                    </div>
                                </div>
                                <div className=' my-4'>
                                    <input type="button" onClick={() => handleSubmit()} value={'submit'} className=' text-white w-[100%] bg-[#75bebd] h-8' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
