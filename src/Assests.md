https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDV-9KHj4IVmZl1hNlG-5esBBmF8S0Rm18Ppa9ewR8w&s
import "sylicon-removebg-preview.png";

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDWyh5LY3CvHwVGd74JIBD29gqM5Rj2Q12QO7tdZJ&s

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuobAwwB1pmgpMNje2_zdK570ut0tI9BivrA&s


import React from 'react'
import tv from './image/Image (10).png';
import phone from './image/image 36.png';
import button from './image/Button (1).png'

function Electronics() {
  return (
    <div>
      <div>
        <div className='flex flex-row justify-between m-6'>
            <div className=''>
                <h2 className='text-lg font-bold'>Electronics</h2>
            </div>
            <div className=''>
                <button className='text-green-550'>See All</button>
            </div>
        </div>
        <div className='flex flex-row overflow-x-auto p-3 grid grid-flow-col overflow-x-auto'>
            <div className='m-5 rounded -xl p-3 h-70 w-60'>
                <div className='w-60' bg-white rounded-xl>
                    <img className='h-ull w-full object-cover roundes-xl' src={tv} alt='ledtv'/>

                </div>
                <div className=''>
                    < h2 className='text-lg font-bold mt-2'>Television</h2>  
                </div>
                <div className=''>
                    <p className='text-sm text-gray-600'>approx 2lbs</p>      
                    </div>
                    <div className='flex flex-row justify-between mt-2'>
                        <img src={button}/>

                    </div>


            </div>

        </div>
      </div>
    </div>
  )
}

export default Electronics
