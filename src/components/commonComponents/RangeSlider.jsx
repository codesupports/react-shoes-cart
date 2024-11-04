import React, { useState, useEffect } from 'react';
import { priceRangeData } from '../../features/SidenavSlice'
import { useDispatch, useSelector } from 'react-redux';


const RangeSlider = ({ min = 0, max = 100, step = 1 }) => {
  const [value, setValue] = useState((min + max) / 2); // Initial value in the middle

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(priceRangeData(value));
  }, [value])

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        style={{ width: '100%' }}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>Value: {value}</span>
      </div>
    </div>
  );
};

export default RangeSlider;