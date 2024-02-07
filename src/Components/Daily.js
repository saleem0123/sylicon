import React from 'react'
import bag from './image/Image (11).png';
import wallet from './image/Image (12).png';
import shoe from './image/image 37.png'
import button from './image/Button (1).png'

function Daily() {
  return (

    <div>

<div className="flex flex-row justify-between px-4 mb-4 py-4">
   <h1 className='txt-lg font-bold'> Shoes and bags</h1>
   <button className="text-green-500">See All</button>
</div>

<div className='p-3 grid' style={{gridTemplateColumns:'repeat(3,1fr)', backgroundColor: '#ffd8d8' }}>

<div className='card '>
    <img className='border round-lg w-100' style={{ backgroundColor: '#fff' }} src={bag} alt="nuts" />
    <div className=''> Black Bery</div>
    <span className=''> approx llb</span>
    <div className='flex flex-row justify-between'>
        <div>$5.78</div>
        <img src={button} alt="" />
    </div>
</div>
<div className='card '>
    <img className='border round-lg w-100' style={{ backgroundColor: '#fff' }} src={wallet} alt="nuts" />
    <div className=''> Black Bery</div>
    <span className=''> approx llb</span>
    <div className='flex flex-row justify-between'>
        <div>$5.78</div>
        <img src={button} alt="" />
    </div>
</div>


<div className='card '>
    <img className='border round-lg w-100' style={{ backgroundColor: '#fff' }} src={shoe} alt="nuts" />
    <div className=''> Black Bery</div>
    <span className=''> approx llb</span>
    <div className='flex flex-row justify-between'>
        <div>$5.78</div>
        <img src={button} alt="" />
    </div>
</div>



</div>


      
    </div>
  )
}

export default Daily
