import React, { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material'
import { useStateContext } from '../openContext';

const Navbar = () => {

  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize
    (window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  },[]);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else{
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <div className='flex justify-between  md:mx-16 py-2 relative'>
      <IconButton 
        aria-label='close'
        onClick={() => setActiveMenu ((prevActiveMenu) => !prevActiveMenu)}
        sx={{
          color: '#1E3440',          
        }}
        size='large'
      >
       
        <MenuIcon fontSize='inherit' />
      </IconButton>
    </div>
  )
}

export default Navbar