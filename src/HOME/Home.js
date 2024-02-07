import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Banner from '../Components/Banner'
import Intro from '../Components/Intro'
import Offer from '../Components/Offer'
import Products from '../Components/Products'
import Deal from '../Components/Deal'
import Popular from '../Components/Popular'
import Banner2 from '../Components/Banner2'
import Electronics from '../Components/Electronics'
import Daily from '../Components/Daily'
import Bakery from '../Bakery'
import Discover from '../Components/Discover'
import DiscoverProducts from '../Components/DiscoverProducts'
import OrderPicup from '../Components/Order'
import Footersection from '../Components/Footersection'

import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";


function Home() {
  return (
    <div>
      <Header/>
      <Search/>
      <Banner/>
      <Intro/>
      <Offer/>
      <Products/>
      <Deal/>
      <Popular/>
      <Banner2/>
      <Electronics/>
      <Daily/>
      <Bakery/>
      <Discover/>
      <DiscoverProducts/>
      <OrderPicup/>
      <Footersection/>
    </div>
  )
}


export default Home
