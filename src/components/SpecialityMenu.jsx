import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'


const SpecialityMenu = () => {
  return (
    <div id="#speciality" className="bg-secondary flex flex-col items-center gap-4 py-16 text-primary">
        <h1 className="text-3xl font-medium">Find by speciality</h1>
        <p className="md:w-1/3 text-center text-sm text-white">
            Simply browse through our extensivelist of trusted  
            doctors,schedule an appointment.
        </p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
            { specialityData.map((item, index) =>(
            <Link 
                key={index} 
                to={`/doctors/${item.speciality}`}
                onClick={()=>scrollTo(0,0)} 
                className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
                <img src={item.image} className="bg-primary rounded p-4 w-16 sm:w-24 mb-2"/>
                <p className='flex items-center justify-center font-semibold text-white'>{item.speciality}</p>
            </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu