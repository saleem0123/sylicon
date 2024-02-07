import React, { useEffect } from 'react'
import fruit from './image/Image (14).png';
import price from './image/Price.png';
import button from './image/Button (1).png'
import { useDispatch, useSelector } from 'react-redux';
import { discovering } from '../DiscoverproductsSlice';
import { addcart } from '../CartSlice';


function DiscoverProducts() {
    const dispatch = useDispatch();
    const discovered = useSelector((state) => state.Category.discovering);
    useEffect(() => {
        dispatch(discovering());
    }, []);

    return (
        <div className='grid grid-cols-2 '>

            {discovered && discovered.map((discoverproducts, id) => (
                <div className='border border-gray-300 p-4 '>
                    <div>
                        "images":
                        <img className='w-32 h-32 object-contain' src={`https://sylcon.howincloud.com/public/${discoverproducts.images[0].image}`} alt='image' />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
                    </div>
                    <div>
                        <p className='text-sm text-gray-600'>approx 0.2lb</p>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <div>
                            <img src={price} alt='' />
                        </div>
                        <div onClick={() => { dispatch(addcart(discoverproducts)) }}>
                            <img src={button} alt='' />
                        </div>
                    </div>
                </div>

            ))}



            {/* <div className='border border-gray-300 p-4'>
                <div>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
                <div>
                    <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>approx 0.2lb</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <div>
                        <img src={price} alt='' />
                    </div>
                    <div>
                        <img src={button} alt='' />
                    </div>
                </div>
            </div> */}

            {/* <div className='border border-gray-300 p-4'>
                <div>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
                <div>
                    <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>approx 0.2lb</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <div>
                        <img src={price} alt='' />
                    </div>
                    <div>
                        <img src={button} alt='' />
                    </div>
                </div>
            </div> */}

            {/* <div className='border border-gray-300 p-4'>
                <div>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
                <div>
                    <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>approx 0.2lb</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <div>
                        <img src={price} alt='' />
                    </div>
                    <div>
                        <img src={button} alt='' />
                    </div>
                </div>
            </div> */}

            {/* <div className='border border-gray-300 p-4'>
                <div>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
                <div>
                    <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
                </div>
                <div>
                    <p className='text-sm text-gray-600'>approx 0.2lb</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <div>
                        <img src={price} alt='' />
                    </div>
                    <div>
                        <img src={button} alt='' />
                    </div>
                </div>
            </div> */}

            {/* <div className='border border-gray-300 p-4'>
                <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
            </div>

            <div>
                <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
            </div>
            <div>
                <p className='text-sm text-gray-600'>approx 0.2lb</p>
            </div>
            <div className='flex justify-between mt-2'>
                <div>
                    <img src={price} alt='' />
                </div>
                <div>
                    <img src={button} alt='' />
                </div>
                <div className='border border-gray-300 p-4'>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
            </div>
            <div>
                <p className='text-sm text-gray-600'>approx 0.2lb</p>
            </div>
            <div className='flex justify-between mt-2'>
                <div>
                    <img src={price} alt='' />
                </div>
                <div>
                    <img src={button} alt='' />
                </div>
                <div className='border border-gray-300 p-4'>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
            </div>
            <div>
                <p className='text-sm text-gray-600'>approx 0.2lb</p>
            </div>
            <div className='flex justify-between mt-2'>
                <div>
                    <img src={price} alt='' />
                </div>
                <div>
                    <img src={button} alt='' />
                </div>
                <div className='border border-gray-300 p-4'>
                    <img className='w-32 h-32 object-contain' src={fruit} alt='image' />
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
            </div>
            <div>
                <p className='text-sm text-gray-600'>approx 0.2lb</p>
            </div>
            <div className='flex justify-between mt-2'>
                <div>
                    <img src={price} alt='' />
                </div>
                <div>
                    <img src={button} alt='' />
                </div> */}
            {/* <div className='border border-gray-300 p-4'>
                <img className='w-32 h-32 object-contain' src={fruit}alt='image'/>
            </div>
         </div>
         <div>
         <h1 className='text-lg font-bold mt-2'>Kiwi fruit</h1>
         </div>
         <div>
         <p className='text-sm text-gray-600'>approx 0.2lb</p>
         </div>
         <div className='flex justify-between mt-2'>
            <div>
                <img src={price}alt=''/>
            </div>
            <div>
                <img src={button}alt=''/>
            </div> */}


            {/* </div> */}

        </div>
    )
}

export default DiscoverProducts
