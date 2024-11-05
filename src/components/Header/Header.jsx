import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { RiAdminLine } from "react-icons/ri";
import './header.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {
    const { slectedCatagory } = useSelector((state) => state.sideNavSlice);
    const addToCardData = useSelector((state) => state.addToCartSlice.items);
    // console.log('slectedCatagory', slectedCatagory)
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex navbar-modi pt-3">
            <div className="navbar-search ms-3 ">
                <input className='form-control' type="text" placeholder='Search. with Brand... ' />
            </div>
            <div className='capital-letter'>{slectedCatagory === "All" ? "All Product" : slectedCatagory}</div>
            <div className='navbar-right d-flex pe-2'>
                <CiHeart />

                {addToCardData.length !== 0 ? <Link to="/cartPage"> <SlBasket />
                    {addToCardData.length === 0 ? null :
                        <span className='badge'>{addToCardData.length}</span>
                    }
                </Link> : <SlBasket />}
                <RiAdminLine />
            </div>
        </nav>
    )
}

export default Header
