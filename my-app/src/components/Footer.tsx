import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='p-2 border-t-2 w-[80vw] ml-auto mr-auto mt-[25%]'>
            <p>&copy; 2023 | <Link className=' border-b text-red-600 ' to={'/'}>wizard Tech</Link></p>
        </footer>
    </div>
  )
}

export default Footer
