import React, { useEffect } from 'react'
import './Product.css'
import { MdAddBox } from "react-icons/md";


import { useDispatch, useSelector } from 'react-redux';
import { featureditems } from '../ProductsSlice';

function Products() {
    const dispatch=useDispatch();
    const Featured=useSelector((state)=>state.products.featureditems);
    useEffect(() => {
        dispatch(featureditems());
      }, []);
    

    // console.log(props.feature, 'producting')

    return (
        <div >
            <div className='flex flex-row justify-between m-6'>
                <div className="text-lg font-bold ">
                    Featured Products
                    <p className='text-sm'>Available Here</p>
                </div>
                <button className='text-green-500 text-lg font-bold'>see all</button>


            </div>
            <div className='flex flex-row'>
                {/* <div className="">
                <img src={img} alt='image' />
                <MdAddBox />
            </div> */}

                {Featured&&Featured.map((featuredproducts, id) => (

                    <div  key={id}className="">
                        <img src={`https://sylcon.howincloud.com/public/${featuredproducts.images[0].image}`} alt='image' />
                        <h1 className='px-2'>Canon camera
                            <br />approx 2lb
                        </h1>
                        <div className='flex flex-row justify-between'>
                            <p className='m-6'>$3.99</p>
                            <div className=''>
                                <MdAddBox />
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Products;
