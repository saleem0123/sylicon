import React from 'react'
import { MdAddBox } from "react-icons/md";
import img1 from './image/image 38.png';
import phone from './image/image 36.png'
import tv from './image/Image (10).png'

function Electronics() {
  return (
    <div>
<div className="flex flex-row justify-between px-4 py-4 mt-4">
    <h1 className="text-lg font-bold">Electronics</h1>
    <p className="text-green-500 ">See All</p>
</div>

    <div className='flex flex-row  overflow-x-auto'>
            <div className="p-3 flex flex-col">
                <div style={{height:"100px", width:"100px"}}>
                <img src={img1} alt='image' />
                </div>
                <h1 className='px-2'>Canon camera
                    <br/>approx 2lb
                </h1>
                <div className='flex flex-row justify-between'>
                    <p className='m-6'>$3.99</p>
                    <MdAddBox />
                </div>
            </div>
            
            <div className="p-3 flex flex-col">
                <img src={phone} alt='image' />
                <h1 className='px-2'>Canon camera
                    <br/>approx 2lb
                </h1>
                <div className='flex flex-row justify-between'>
                    <p className='m-6'>$3.99</p>
                    <MdAddBox />
                </div>
            </div>
            <div className="p-3 flex flex-col">
                <img src={tv} alt='image' />
                <h1 className='px-2'>Canon camera
                    <br/>approx 2lb
                </h1>
                <div className='flex flex-row justify-between'>
                    <p className='m-6'>$3.99</p>
                    <MdAddBox />
                </div>
            </div>

            <div className="p-3 flex flex-col">
                <img src={tv} alt='image' />
                <h1 className='px-2'>Canon camera
                    <br/>approx 2lb
                </h1>
                <div className='flex flex-row justify-between'>
                    <p className='m-6'>$3.99</p>
                    <MdAddBox />
                </div>
            </div>
    </div>
    </div>
  )
}

export default Electronics
