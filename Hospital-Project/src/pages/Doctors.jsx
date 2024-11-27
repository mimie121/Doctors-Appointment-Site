import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import{AppContext} from '../context/AppContext'

const Doctors = () => {

  const {speciality} =  useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()

  const [showFilter, setShowFilter] = useState(false)


  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  return (
    <div  onClick={()=>scrollTo(0,0)}>
        <p className='text-gray-600 mt-3'>Browse through the doctors specialist.</p>
        <div  className='flex flex-col sm:flex-row items-start gap- mt-10'>

          <button className={`mb-5 py-1 px-3 border rounded text-sm transition-all md:hidden ${showFilter ? 'bg-Ccolor text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
          <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>

          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border broder-gray-300 rounded transition-all cursor-pointer mr-5  mb-3 ${speciality === "Gynecologist" ? "bg-Ccolor text-black" : "" }`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border broder-gray-300 rounded transition-all cursor-pointer mr-5 mb-3 ${speciality === "Dermatologist" ? "bg-Ccolor text-black" : "" }`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border broder-gray-300 rounded transition-all cursor-pointer mr-5 mb-3 ${speciality === "Pediatricians" ? "bg-Ccolor text-black" : "" }`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border broder-gray-300 rounded transition-all cursor-pointer mr-5 mb-3 ${speciality === "" ? "bg-Ccolor text-black" : "" }`}>Neurologist</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border broder-gray-300 rounded transition-all cursor-pointer mr-5 mb-3 `}>Gastroenterologist</p>
          <p onClick={()=> speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border broder-gray-300 rounded transition-all cursor-pointer mr-5 mb-3`}>General Physician</p>
          
          </div>

          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item,i)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-red-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={i}>
                    <img className='bg-red-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors