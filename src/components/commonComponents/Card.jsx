import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";


const Card = ({ data }) => {
  
  const starRating = [];
  for (let i = 0; i < data.star; i++) {
    starRating.push(<MdOutlineStar key={i} />)
  }

  return (
      <div className='card-wrapper'>
        <figure>
          <img src={data.img} alt={data.title} />
        </figure>
        <h6>{data.company} - <span>{data.category}</span><br/><span style={{backgroundColor: `${data.color}`}}></span></h6>
        <div className='card-review d-flex py-2'>
          <div className='review-star'>
            {starRating}
          </div>
          <div className='review-total'>{data.reviews}</div>
        </div>
        <div className="card-price">
          <del>{data.prevPrice}</del> ${data.newPrice}
        </div>
        <div className='card-add-btn pt-3 text-center'>
          <button className='btn btn-outline-primary btn-sm' >Add to Card</button>
        </div>
      </div>
  )
}

export default Card
