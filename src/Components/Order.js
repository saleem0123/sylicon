import React from 'react'

function OrderPicup() {
  return (
    <div className='flex justify-center mb-4 h-20 relative mt-1'>
        <div className='w-80 bg-green-900 rounded-lg h-20 flex items-center justify-between relative px-4 shadow-md'>
            <span className='text-white'>your order is picked up</span>
            <button className='bg-red-700 text-white rounded-md px-4 py-2'>View</button>
        </div>
      
    </div>
  )
}

export default OrderPicup
