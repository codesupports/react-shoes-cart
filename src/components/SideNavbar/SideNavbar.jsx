import React, { useEffect } from 'react'
import Category from './Category'
import Price from './Price'
import Color from './Color'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const SideNavbar = () => {
  const { data } = useSelector((state) => state.sideNavSlice);


  return (
    <div className='position-reletive'>
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
