import React, { useEffect, useState } from 'react'
import './Header.css'
// import axios from 'axios';

import { IoMdNotifications } from "react-icons/io";


function Header() {

    return (
        <div className='header'>
            <div className='logoimg'>
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDWyh5LY3CvHwVGd74JIBD29gqM5Rj2Q12QO7tdZJ&s" alt='logo' />
            </div>
            <div className='location'>
                <button className='btn'>KOCHI,KL</button>
            </div>
            <div className='notification'><IoMdNotifications /></div>
        </div>


    );
}

export default Header;
