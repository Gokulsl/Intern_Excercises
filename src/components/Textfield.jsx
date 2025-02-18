import React from 'react'

const Textfield = ({label,placeholder="",className="",disabled=false}) => {
  return (
    <div>
    <label>{label}</label>
      <input type="text"
        className={`w-60 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none ${disabled ? "opacity-50 cursor-not-allowed":"cursor-pointer"} ${className}`}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

export default Textfield;
