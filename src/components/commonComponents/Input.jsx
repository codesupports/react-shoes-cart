import React, { useState } from 'react'

const Input = ({ name, id, value, checked, onChange, label }) => {

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={`${label}`} >{name}</label>
    </div>
  )
}

export default Input
