import React from 'react'
import fries from './Components/image/Image (13).png';
import bread from './Components/image/Image (14).png';
import buns from './Components/image/image 48.png';
import buttonadd from './Components/image/Button (1).png'

function Bakery() {
  return (
    <div>
        <div className='flex flex-row justify-between m-6'>
        <h1 className='text-lg font-bold'>Bakery</h1>
        <div className=''> 
        <button className='text-green-500 text-lg font-bold'>see all</button>
        </div>
        </div>
      <div className='p-3 grid' style={{gridTemplateColumns:'repeat(3,1fr)', backgroundColor: '#white' }}>
        

<div className='card '>
    <img className='border round-lg w-100' style={{ backgroundColor: '#white' }} src={fries} alt="nuts" />
    <div className=''> Black Bery</div>
    <span className=''> approx llb</span>
    <div className='flex flex-row justify-between'>
        <div>$5.78</div>
        <img src={buttonadd}alt="" />
    </div>
</div>
<div className='card '>
    <img className='border round-lg w-100' style={{ backgroundColor: '#white' }} src={bread} alt="nuts" />
    <div className=''> Black Bery</div>
    <span className=''> approx llb</span>
    <div className='flex flex-row justify-between'>
        <div>$5.78</div>
        <img src={buttonadd} alt="" />
    </div>
</div>


<div className='card '>
    <img className='border round-lg w-100' style={{ backgroundColor: '#white'}}src={buns} alt="nuts" />
    <div className=''> Black Bery</div>
    <span className=''> approx llb</span>
    <div className='flex flex-row justify-between'>
        <div>$5.78</div>
        <img src={buttonadd} alt="" />
    </div>
</div>



</div>

    </div>
  )
}

export default Bakery
