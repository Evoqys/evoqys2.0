import React from "react"

const TextField:React.FC<any> = ({ id, type, name, label, placeholder, value, onChange }) => {
  return (
    <div className='text-field w-100'>
      <label className='d-block m-0 mb-1'>{label}</label>
      <input
        className='px-2 py-1'
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  )
}

export default TextField
