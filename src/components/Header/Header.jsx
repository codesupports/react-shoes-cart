import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex navbar-modi pt-3">
            <div className="navbar-search ms-3 ">
                <input className='form-control' type="text" placeholder='Search. with Brand... ' />
            </div>
            <div className='navbar-right d-flex pe-2'>
                <CiHeart />
                <SlBasket />
                <RiAdminLine />
            </div>
        </nav>
    )
}

export default Header
