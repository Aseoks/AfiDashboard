import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='mb-10'>
      <p className='ml-16 p-3 font-extrabold text-3xl tracking-tight'>{title}</p>
    </div>
  )
}

export default Header