import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
  return (
    <div className="flex items-center justify-between text-sm my-4 mb-5">
        <img 
            src={assets.logo}
            className="w-40 cursor-pointer"
            onClick={()=>navigate('/')}
        />
        <ul className="hidden md:flex items-start gap-5 font-medium text-secondary">
            <NavLink to="/">
                <li className="py-1">HOME</li>
                <hr className="outline-none border-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/doctors">
                <li className="py-1">ALL DOCTORS</li>
                <hr className="outline-none border-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/about">
                <li className="py-1">ABOUT</li>
                <hr className="outline-none border-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
            <NavLink to="/contact">
                <li className="py-1">CONTACT</li>
                <hr className="outline-none border-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
            </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {token ?
            <div className="flex items-center gap-2 cursor-pointer group relative">
                <img 
                    src={assets.profile_pic}
                    className="w-8 rounded-full"
                />
                <img 
                    src={assets.dropdown_icon}
                    className="w-2.5 cursor-pointer"
                    />
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-primary hidden group-hover:block">
                        <div className="min-w-48 bg-secondary flex flex-col gap-2 p-4">
                            <p onClick={()=> navigate("profile")} className="hover:text-white cursor-pointer">My profile</p>
                            <p onClick={()=> navigate("my-appointments")} className="hover:text-white cursor-pointer">My appointments</p>
                            <p onClick={()=>setToken(false)} className="hover:text-white cursor-pointer">Logout</p>
                        </div>
                    </div>
            </div> :
                <button
                    onClick={()=>navigate('/login')} 
                    className="bg-primary text-secondary px-8 py-3 rounded-full font-light hidden md:block">
                    Create account
                </button>
            }

            <img 
                src={assets.menu_icon} 
                className="w-6 md:hidden"
                onClick={()=>setShowMenu(true)}
            />


            {/* ........Mobile menu........ */}
            <div className={`${showMenu ? "fixed w-full": "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-secondary transition-all`}>
                <div className="flex items-center justify-between px-5 py-6">
                    <img src={assets.logo} alt='' className="w-36"/>
                    <img 
                        src={assets.cross_icon} alt=''
                        onClick={()=>setShowMenu(false)}
                        className="w-7"
                    />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-white text-lg font-medium">
                    <NavLink onClick={()=>setShowMenu(false)} to="/"><p className="px-4 py-4 rounded inline-block">HOME</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to="/doctors"><p className="px-4 py-4 rounded inline-block">ALL DOCTORS</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to="/about"><p className="px-4 py-4 rounded inline-block">ABOUT</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to="/contact"><p className="px-4 py-4 rounded inline-block">CONTACT</p></NavLink>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar