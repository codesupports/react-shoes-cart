import React, { useEffect } from 'react'
import RangeSlider from '../commonComponents/RangeSlider';


const Price = () => {



    return (
        <section className="category-block">
            <h5 className='py-3'>Price</h5>
            <div className="form-check pe-3">
                <RangeSlider min={0} max={200} step={5} />
            </div>
        </section>
    )
}

export default Price
