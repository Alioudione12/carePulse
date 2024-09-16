import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-2 pt-4">
        {/*--------- left side ------------*/}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30px]">
            <p className="text-2xl md:text-4xl lg:text-5xl text-primary font-semibold leading-tight md:leading-tight lg:leading-tight">Book appointment <br/>With Trusted Doctors</p>
            <div className=" flex flex-col md:flex-row items-center gap-3 text-dark-200 text-sm font-light">
                <img className="w-28" src={assets.group_profiles} alt=""/>
                <p>Simply browse through our extensive <br className="hidden sm:block"/> list of trusted  doctors,
                schedule an appointment.
                </p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-primary px-8 py-3 rounded-full text-secondary text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book appointment
                <img 
                    className="w-3"
                    src={assets.arrow_icon} alt=""

                    />
            </a>
        </div>

        {/*------ right side -------- */}
        <div className="md:w-1/2 relative">
            <img 
                src={assets.header_img}
                className="w-full md:absolue bottom-0 h-auto rounded-lg"
                />
        </div>
    </div>
  )
}

export default Header