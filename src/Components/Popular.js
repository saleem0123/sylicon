import React, { useEffect } from 'react'
import crab from './image/Image (7).png';
import button from './image/Button (1).png';
// import blueberry from './image/Product Card (2).png'
import blue from './image/Image (9).png'
import { useDispatch, useSelector } from 'react-redux';
import { popularity } from '../PopularSlice';

function Popular() {
    const dispatch = useDispatch();
    const popular = useSelector((state) => state.popularitem.popularity);
  
    useEffect(() => {
      dispatch(popularity()) 
    }, []);

    return (
        <div>
            <h1 className='text-lg font-bold px-2'>Popular products</h1>
            <p className='text-sm font-bold px-2'>The mojority moving products and own products </p>

            <div className='p-3 grid grid-flow-col overflow-x-auto' style={{ backgroundColor: '#ffd8d8' }}>

                {popular && popular.map((popularview, id) => (
                    <div className='card'>
                        <div className="p-3 grid">
                            <img className='' src={`https://sylcon.howincloud.com/public/${popularview.images[0].image}`} alt='popularimage' />
                            <h1 className='px-2'>{popularview.name}
                                <br />
                            </h1>
                            <div className='flex flex-row justify-between'>
                                <p className=''>{popularview.market_price}</p>
                                <div className=''>
                                    <p className=''>{popularview.sell_price}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        </div>


    )
}

export default Popular;
