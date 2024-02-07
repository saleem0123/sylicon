import React from 'react';
import './Offer.css'
import { useDispatch,useSelector } from 'react-redux';
import { getSliders } from '../offerSlice';
import { useEffect } from 'react';




function Offer() {
  const dispatch = useDispatch();
  const offers1 = useSelector((state) => state.offers.todayoffer);

  useEffect(() => {
    dispatch(getSliders()) 
  }, []);

console.log(offers1,"asdafag")


  // console.log(props.offeritem, 'Todaysoffereeeeeeeeee')

  return (
    <div className='offer'>
      <div className='season'>
        <h3 className='text-lg font-bold px-4'> Today's Offer</h3>

        <div className="flex flex-row  gap-2 m-3 overflow-x-auto">

        {offers1 && offers1.map((todaysoffers, id) => (

          <div key={id} className='overflow-x-auto'>
            <img src={`https://sylcon.howincloud.com/public/${todaysoffers.image}`} alt='offerimage' className=''/>
          </div>
        ))}
        </div>


      </div>
    </div>
  )
}

export default Offer;
