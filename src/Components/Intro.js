import React, { useEffect } from 'react'
import './Intro.css'

// import img8 from '../Components/image/Icon.png';
import img7 from './/image/Box Icon (2).png'
import { useDispatch, useSelector } from 'react-redux'
import { IntreoConnection } from '../introSlice';


function Intro() {

const dispatch = useDispatch();
const IntroItem = useSelector((state)=>state.Intro.IntreoConnection);

useEffect(() => {
    dispatch(IntreoConnection());
}, [dispatch]);




  // console.log(props.intros, 'introproducts')
  return (
    <div className='intro'>
      <h3 className='items'>What are you looking for?</h3>

      

      <div className='grid grid-cols-4 m-5' >

      {IntroItem && IntroItem.map((category, id) => (
        <>
            <div key={id} className=''>
              <img src={`https://sylcon.howincloud.com/public/${category.image}`} alt="productimage" className="images" />
              <p>{category.name}</p>
            </div>
        </>
      ))}
      </div>

      <div className='bttn'>
        <button className='btnss'>View More</button>
      </div>
    </div>
  );
}

export default Intro;
