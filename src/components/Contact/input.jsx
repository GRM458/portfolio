import React from 'react'

export default function Input({placeholder,value,handler,type,Name}) {
  return (
    <div className='inline'>
        <input type={type} className='border-2 border-PrimaryColor px-3 py-2 rounded-md font-normal w-87.5' value={value} placeholder={placeholder} onChange={handler} name={Name}/>
    </div>
  )
}
