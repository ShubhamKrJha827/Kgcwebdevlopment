import {  } from 'react'
import Logo from "../../assets/PNG.png"
import { Link } from 'react-router-dom'


function Navbar() {
  

    return (
        <div className='md:flex justify-between bg-black items-center'>
            <ul className='w-full'>
                <li><img className='h-28 w-30 p-7' src={Logo} alt="" /></li>
                
            </ul>
            <ul className='grid justify-center pb-8 md:flex md:gap-12 w-full text-white m:justify-end px-6 md:p-6'>
                <li><Link to="">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="">GROUP OF COMPANIES</Link></li>
                
            </ul>

        </div>

    )
}

export default Navbar