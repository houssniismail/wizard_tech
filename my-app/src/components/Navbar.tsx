import React, { useState } from 'react'
import {  NavLink, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = () => {
        return { Home: '/', About: '/about', categories: '/categories', regiter: '/regiter' }
    }
    function currentLocation() {
        const Location = () => {
            return useLocation();
        }
        return Location().pathname
    }
    return (
        <div>
            <div className='flex md:hidden justify-end'>
                {open ? <X onClick={() => setOpen(!open)} /> : <Menu onClick={() => setOpen(!open)} />}
            </div>
            <div>
                <ul className='md:flex py-2 flex-row hidden relative justify-evenly  h-auto md:w-[50vw] bg-white left-[47%] '>
                    <li className={currentLocation() === '/' ? 'text-red-600' : ''}><NavLink to={routes().Home}>Home</NavLink></li>
                    <li className={currentLocation() === '/about' ? 'text-red-600' : ''}><NavLink to={routes().About}>About</NavLink></li>
                    <li className={currentLocation() === '/categories' ? 'text-red-600' : ''}><NavLink to={routes().categories}>Categories</NavLink></li>
                    <li className={currentLocation() === '/regiter' ? 'text-red-600' : ''}><NavLink to={routes().regiter}>Regiter</NavLink></li>
                </ul>
                <ul className={open ? `block md:hidden ` : 'hidden md:hidden'}>
                    <li className={currentLocation() === '/' ? 'text-red-600' : ''}><NavLink  to={'/'}>Home</NavLink></li>
                    <li className={currentLocation() === '/about' ? 'text-red-600' : ''}><NavLink to={'/about'}>About</NavLink></li>
                    <li className={currentLocation() === '/categories' ? 'text-red-600' : ''}><NavLink to={'/categories'}>Categories</NavLink></li>
                    <li className={currentLocation() === '/regiter' ? 'text-red-600' : ''}><NavLink to={'/regiter'}>Regiter</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
