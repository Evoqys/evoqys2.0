import React from "react"

const TextArea:React.FC<any> = ({ id, name, label, placeholder, value, onChange }) => {
  return (
    <div className='text-field w-100'>
      <label className='d-block m-0 mb-1'>{label}</label>
      <textarea
        className='px-2 py-1'
        rows={7}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  )
}

export default TextArea
