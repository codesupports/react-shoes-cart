import React, { useEffect, useState } from 'react'
import Card from '../commonComponents/Card'
import { useSelector } from 'react-redux';

const Product = () => {

  const { data, loading, error, slectedCatagory, priceRange, color } = useSelector((state) => state.sideNavSlice);
  const [mainData, setMainData] = useState(data);

  const filterdData = mainData.filter((item) => (
    item.category.indexOf(slectedCatagory) !== -1
  ))

  const filterdDataByColor = mainData.filter((item) => (
    item.color.indexOf(color) !== -1
  ))

  // const filterdData2 = mainData.filter((item) => (
  //   item.newPrice <= priceRange
  // ))


  return (
    <div className='card-contnaier'>
      {(slectedCatagory === 'All' && color === 'All') &&
        mainData.map((item, index) => {
          return (
            <Card key={index} data={item} isButton={true} />
          )
        })}
      {slectedCatagory === slectedCatagory &&
        filterdData.map((item, index) => {
          return (
            <Card key={index} data={item} isButton={true} />
          )
        })}
      {color === color &&
        filterdDataByColor.map((item, index) => {
          return (
            <Card key={index} data={item} isButton={true} />
          )
        })}
    </div>
  )
}

export default Product
