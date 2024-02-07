import React, { useEffect } from 'react'
import './Banner.css'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
// import { foodban } from '../BannerSlice';
import { banner } from '../BannerSlice';


function Banner() {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.users.banner);

  useEffect(() => {
    dispatch(banner()) 
  }, []);

  console.log(banners,'asdsa')


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className='banner'>
      <Slider {...settings}>
        {banners && banners.map((banner, id) => (
          <img src={`https://sylcon.howincloud.com/public/${banner.image}`} alt="" className="look" />
        ))}
      </Slider>
    </div>
  )
}

export default Banner;
