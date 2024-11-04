import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCartDataFunc } from '../../features/AddToCartSlice'

const Card = ({ data, isButton, quantity }) => {
  const dispatch = useDispatch();

  const starRating = [];
  for (let i = 0; i < data.star; i++) {
    starRating.push(<MdOutlineStar key={i} />)
  }

  const addToCart = (val) => {
    dispatch(addToCartDataFunc(val));
  }



  return (
    <div className='card-wrapper position-relative'>
      {quantity && <span className="product-quantity">Quantity : {quantity}</span>}
      <figure>
        <img src={data.img} alt={data.title} />
      </figure>
      <h6>{data.company} - <span>{data.category}</span><br /><span style={{ backgroundColor: `${data.color}` }}></span></h6>
      <div className='card-review d-flex py-2'>
        <div className='review-star'>
          {starRating}
        </div>
        <div className='review-total'>{data.reviews}</div>
      </div>
      <div className="card-price">
        <del>{data.prevPrice}</del> ${data.newPrice}
      </div>
      {isButton &&
        <div className='card-add-btn pt-3 text-center'>
          <button className='btn btn-outline-primary btn-sm' onClick={() => addToCart(data)}>Add to Card</button>
        </div>
      }
    </div>
  )
}

export default Card
