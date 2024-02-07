import React, { useEffect } from 'react'
import Slider from "react-slick";

import banner2 from './image/WhatsApp Image 2024-01-08 at 15.45.38_580a6dfd.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { banner } from '../BannerSlice';

function Banner2() {

  const dispatch = useDispatch();
  const banners = useSelector((state) => state.users.banner);

  useEffect(() => {
    dispatch(banner()) 
  }, []);




  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
    
  };

  return (
    <div className='card p-3' >
        <Slider {...settings}>
        {banners && banners.map((objj, id) => (
          <img key={id} className="w-full h-full" src={`https://sylcon.howincloud.com/public/${objj.image2}`} alt="banner" />
        )
        )}
    </Slider>
      </div>


  );



}

export default Banner2
