import React, { useEffect } from 'react'
import vector from './image/Vector.png';
import offer from "./image/Section Header (2).png";
import ceshaw from './image/Image (4).png';
import almond from './image/Image (5).png';
import kiwi from './image/Image (6).png';

import buttonimg from "./image/Button (1).png";

import { IoAddCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { dealer } from '../DealSlice';

function Deal() {
    const dispatch=useDispatch();
    const dealitems=useSelector((state)=>state.DealItems.dealer);
    useEffect(() => {
        dispatch(dealer());
      }, []);
//  console.log(props.dealing, 'Todaysdealss')

    return (

        <div>
            <div className='flex flex-row  justify-between'>
                <div className='text-2xl font-bold text-red-500 px-4'>Today's Deal</div>
                <div className="flex flex-row justify-end items-end position relative">
                    <img className='' src={vector} alt='vector' />
                    <img className='
                 position absolute' src={offer} alt="logo" style={{ bottom: 20, right: 15 }} />
                </div>
            </div>
            <p className='px-4 text-lg font-bold'>Today is have an ammazing deals day</p>
            <div className='p-3 grid' style={{gridTemplateColumns:'repeat(3,1fr)', backgroundColor: '#ffd8d8' }}>

                {dealitems && dealitems.map((todaydeal, id)=>(
                          <div key={id} className='card '>
                          <img className='border round-lg w-100' style={{ backgroundColor: '#fff' }} src={`https://sylcon.howincloud.com/public/${todaydeal.images[0].image}`} alt="nuts" />
                          <div className=''> Black Bery</div>
                          <span className=''> approx llb</span>
                          <div className='flex flex-row justify-between'>
                              <div>$5.78</div>
                              <img src={buttonimg} alt="" />
                          </div>
                      </div>

                ))}

          
                {/* <div className='card '>
                    <img className='border round-lg w-100' style={{ backgroundColor: '#fff' }} src={almond} alt="nuts" />
                    <div className=''> Black Bery</div>
                    <span className=''> approx llb</span>
                    <div className='flex flex-row justify-between'>
                        <div>$5.78</div>
                        <img src={buttonimg} alt="" />
                    </div>
                </div> */}


                {/* <div className='card '>
                    <img className='border round-lg w-100' style={{ backgroundColor: '#fff' }} src={kiwi} alt="nuts" />
                    <div className=''> Black Bery</div>
                    <span className=''> approx llb</span>
                    <div className='flex flex-row justify-between'>
                        <div>$5.78</div>
                        <img src={buttonimg} alt="" />
                    </div>
                </div> */}



            </div>
            <div className='flex flex-row justify-center bg-red-300'>
            <button className='text-lg '>view all products</button>

            </div>

        </div>





    );
}
export default Deal;
