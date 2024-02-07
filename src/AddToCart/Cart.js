import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import img from '../Components/image/Image (16).png'
import img2 from '../Components/image/Button (2).png'
import img3 from '../Components/image/Button (3).png'
import img4 from '../Components/image/Image (17).png'
import img5 from '../Components/image/Image (18).png'
import badge from '../Components/image/Badge.png'
import icon from '../Components/image/Icon (4).png'
import promo from '../Components/image/Apply promotional code.png'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import noImage from '../Components/image/image 38.png'
import { MdCancelPresentation } from "react-icons/md";
import { addcart, removecart } from '../CartSlice';
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";




function Cart() {

  const dispatch = useDispatch();

  const { id } = useParams();
  const carts = useSelector((state) => state.cartadd.cartitems)
  const cartproducts = useSelector((state) => state.cartadd);
  const [count, setcount] = useState(0)
  const [filteritems, setfilteritems] = useState([]);
  useEffect(() => {
    const filteritems = carts.filter((item) => item.id === id);
    setfilteritems(filteritems)
  }, [carts, id]);

  const addItems = () => {
    setcount(count + 1)
  }
  const deleteitems = () => {
    setcount(count - 1)
  }


  console.log(carts, 'assdds');



  return (
    <div>
      <div className='flex flex-row justify-between px-5 py-5'>
        <h1 className='text-lg font-bold'>Cart</h1>
        <div className='flex flex-row px-5 py-1'>
          <div className='  ml-5'><IoSearch /></div>

          <div className='  ml-5'><GrFavorite /></div>
        </div>
      </div>

      <div className='px-5'>Send to:Kochi,Kl</div>
      <div className="h-3 bg-gray-200 mt-5"></div>


      {carts && carts.map((item, id) => (

        <div key={id}>
          <div className="flex flex-row items-center justify-between px-5 py-5">
            <div>
              {item?.images?.length > 0 ? (
                <img src={`https://sylcon.howincloud.com/public/${item.images[0].image}`} alt='cabbage'
                  style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />
              ) : (
                <img src={noImage} alt='add'
                  style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />

              )}

            </div>

            <div className="ml-4">
              <div>{item.name}</div>
              <div>{item.description}</div>
            </div>

        

            <div onClick={() => {
              const product = Object.assign({}, item, {
                quantity: 1,
                allRemove: true
              });
              dispatch(removecart(product));
            }}>
              {""}
              <MdCancelPresentation />
            </div>
          </div>

          

          <div className="flex flex-row items-center px-5">
            <div className='mr-auto'>Total:{item.sell_price}</div>
            <div onClick={()=>{
                const product = Object.assign({},item,{
                  quantity:1,
                  allRemove:false,
                })
                dispatch(removecart(product));
            }}>
              <FaMinus />
            </div>
            <div className='px-2'>{item?.qauntity}</div>

            <div onClick={()=>{
              const product= Object.assign({},item,{
                quantity:1,
              })
              dispatch(addcart(product))
            }}>
              <div><IoMdAdd /></div>
            </div>
            
            <div className='h-1 bg-gray-200 mt-5'></div>
          </div>
          </div>
          ))}
        

          <div>
            <h2 className='text-xl font-bold px-4'>Note</h2>
          </div>
          <div className='m-4 rounded-xl border border-gray-300 p-5 h-25 w-90'>
            <div className='text-center'>
              please check the product before packing
            </div>
          </div>


          <div className='flex flex-row justify-between items-center m-5 rounded-xl border border-gray-300 p-5 h-20 w-90'>

            <div>
              <img src={badge} alt="badge" className="" />
            </div>

            <div>
              <img src={promo} alt="apply" className="" />
            </div>

            <div>
              <img src={icon} alt="move" className="" />
            </div>

          </div>

          <div className="rounded-t-3xl bg-cyan-50 h-90 mt-9">
            <div className="py-9">

              <div className='flex flex-row justify-between px-6 py-2'>
                <div>Total Amount</div>
                <div>$3.99</div>
              </div>
              <div className='flex flex-row justify-between px-6 py-2'>
                <div>Total Amount</div>
                <div>$3.99</div>
              </div>
              <div className='flex flex-row justify-between px-6 py-2'>
                <div>Total Amount</div>
                <div>$3.99</div>
              </div>
              <div className='flex flex-start'>
                <div className='flex flex-row justify-center items-center m-auto'>
                ..................................................................................
                </div>
                
              </div>

              <div className='felx flex-row justify-center'>
                <div className='flex felx-row justify-between px-6'>
                  <h1 className='text-2xl font-bold'>Sub Total</h1>
                  <h2 className='text-2xl font-bold text-red-500 '>$3.99</h2>
                </div>
              </div>

              <div className=''>
                <div className=" flex justify-center relative  m-auto rounded-xl border  bg-green-800 h-20 w-90 p-4">
                  <div className='absolute text-2xl text-white'>
                    Continue
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
  )
}

export default Cart
