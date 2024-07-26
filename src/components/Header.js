import React from 'react'


const Header = () => {
  return (
    <div className='absolute z-20 px-14 py-4'>
      <img className='w-44 brightness-100 ' src={`${process.env.PUBLIC_URL}/Assets/netflix-logo.png`} alt="Netflix Logo" />
    </div>
  )
}

export default Header