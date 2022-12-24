import React from 'react'
import '../../componets/Create.css'
const Popup = ({name, surname, years, gender, city, address, language}) => {

  return (
    
    <div className='table' >
    <h3 className='data' >The data you filled in</h3>
    <input value={name} placeholder="Nname" />

 
    <input value={surname} placeholder="Surname" />
    <input value={years} placeholder="Years" />

    <input value={gender} placeholder="Gender" />

    <input value={city} placeholder="City" />

    <input value={address} placeholder="address" />
    <input value={language} placeholder="language" />





  </div>

  )
}

export default Popup