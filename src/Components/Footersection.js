import React from 'react'
import home from './image/icon home.jpg';
import order from './image/orderpick.jpg';
import cart from './image/carticon.jpg';
import menu from './image/Menu (3).png';
 import rectangle from './image/Home Indicator.png'
 import { Link } from 'react-router-dom';

function Footersection() {
  return (
    <div>
      <div className='flex flex-row justify-between px-5'>
        <img src={home}alt=''/>
        <img src={order}alt=''/>
        <Link to={'/cart'}>
        <img src={cart}alt=''/>
        </Link>
        
        <img src={menu}alt=''/>
        </div>
       <div className='flex justify-center items mb-4'>
         <img src={rectangle}alt=''/>
        </div>
    </div>
  )
}

export default Footersection
