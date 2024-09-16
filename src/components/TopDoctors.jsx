import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center gap-4 text-secondary md:mx-10 mt-8">
        <h1 className="text-3xl font-medium text-primary">Top Doctors to book </h1>
        <p className="sm:w-1/3 text-center text-sm">List of trusted  doctors,schedule an appointment.</p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {doctors.slice(0, 10).map((item, index) =>(
            <div 
                onClick={()=>{navigate(`/appointments/${item._id}`); scrollTo(0,0)}}
                key={index} 
                className="border bg-primary/25 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500">
                <img 
                    src={item.image}
                    className="bg-white object-fill h-48 w-96" 
                    alt=""   
                    />
                <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-primary">
                        <p className="w-2 h-2 bg-green-600 rounded-full"></p> <p>Available</p>
                    </div>
                    <p className="text-dark-200  font-medium">{item.name}</p>
                    <p className="text-dark-200 text-sm font-semibold">{item.speciality}</p>
                </div>
            </div>
            ))}
        </div>
        <button 
            onClick={()=>{navigate('/doctors'), scrollTo(0,0)}}
            className="border-2 border-primary text-dark-200 px-14 py-2 rounded-full mt-8 transition-all duration-300">
            More+
        </button>
    </div>
  )
}

export default TopDoctors