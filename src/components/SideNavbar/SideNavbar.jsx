import React, { useEffect } from 'react'
import Category from './Category'
import Price from './Price'
import Color from './Color'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const SideNavbar = () => {
  const { data } = useSelector((state) => state.sideNavSlice);

  const showSideNav = () => {
    const navDiv = document.querySelector('.container-left')
    const overlayDiv = document.querySelector('.overlay')

    navDiv.classList.toggle("showNav");
    overlayDiv.classList.toggle("showOverlay");

  }

  return (
    <div className='position-reletive'>
      <div className='mobile-menu' onClick={() => { showSideNav() }}><GiHamburgerMenu /></div>
      <div className='logo-wrapper'>
        <Link to="/" role='logo' alt="Company Name - Homepage">
          <FaHome role="img"
            aria-label="Company Name - Homepage" />
        </Link>
      </div>
      <Category data={data} category={"Category"} />
      <Price data={data} category={"Price"} />
      <Color data={data} category={"Colors"} />
    </div>
  )
}

export default SideNavbar
