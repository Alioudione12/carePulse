import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            {/* ----------left section-------- */}
            <div>
                <img className="mb-5 w-40" src={assets.logo} alt=""/>
                <p className="w-full md:w-2/3 text-dark-200 leading-6">
                    You can also use variant modifiers to target media queries like 
                    responsive breakpoints, dark mode, prefers-reduced-motion, and more. 
                    For example, use md:object-scale-down to apply the object-scale-down utility 
                    at only medium screen sizes and above.
                </p>
            </div>

            {/* ----------center section-------- */}
            <div>
                <p className="text-l font-medium mb-5 text-secondary">COMPANY</p>
                <ul className="flex flex-col gap-2 text-dark-200">
                <NavLink to="/"><li >Home</li></NavLink>
                <NavLink to="/about"><li >About us</li></NavLink>
                <NavLink to="/contact"><li>Contact us </li></NavLink>
                <NavLink><li>Privacy policy</li></NavLink>
                </ul>
            </div>

            {/* ----------right section-------- */}
            <div>
                <p className="text-l font-medium mb-5 text-secondary">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-dark-200">
                    <li>+1 345 78 97 89</li>
                    <li>carepulse@pro.com</li>
                </ul>
            </div>
        </div>
        {/* ----------copyright-------- */}
        <div>
            <hr/>
            <p className="py-5 text-sm text-center text-primary">Copyright © 2024 CarePluse Tous droits réservés</p>
        </div>
    </div>
  )
}

export default Footer
