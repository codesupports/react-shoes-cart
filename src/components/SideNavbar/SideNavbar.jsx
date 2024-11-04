import React, { useEffect } from 'react'
import Category from './Category'
import Price from './Price'
import Color from './Color'
import { useDispatch, useSelector } from 'react-redux';
// import {fetchData} from '../../features/SidenavSlice'

const SideNavbar = () => {
  const { data, loading, error } = useSelector((state) => state.sideNavSlice);


  return (
    <div>
      <Category data={data} category={"Category"}/>
      <Price data={data} category={"Price"}/>
      <Color data={data} category={"Colors"}/>
    </div>
  )
}

export default SideNavbar
