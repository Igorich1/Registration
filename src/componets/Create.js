import React, { useState } from 'react'
import './Create.css'
import Popup from './Popup/Popup';
// import Popup from './Popup/Popup';
const Create = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [years, setYears] = useState("");
    const [addBlock, setAddBlock] = useState(true);
    const addBlockTriger = addBlock;
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='create' >
            <h2>Register</h2>
            <form>
                <div className='form-field' >
                    <label>Name</label>
                    <input
                        type="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='form-field' >
                    <label>Surname</label>
                    <input
                        type="Surname"
                        required
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                </div>

                <div className='form-field' >
                    <label>Years</label>
                    <input
                        type="date"
                        required
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                    />
                </div>


                <label>Gender</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}

                >
                    <option value="Man" >Man</option>
                    <option value="Woman" >Woman</option>


                </select>

                <div className='form-field' >
                    <label>City</label>
                    <input
                        type="Surname"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>


                <div className='form-field' >
                    <label>Address</label>
                    <input
                        type="Address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <label> language</label>
                <select

                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}

                >
                    <option value="Ukrainian" >Ukrainian</option>
                    <option value="English" >English</option>
                    <option value="Polish" >Polish</option>
                    <option value="Italian" >Italian</option>
                    <option value="Spanish" >Spanish</option>



                </select>

                {/* <div className='table' >
      <h3 className='data' >The data you filled in</h3>
      <input value={name} placeholder="Nname" />


      <input value={surname} placeholder="Surname" />
      <input value={years} placeholder="Years" />

      <input value={gender} placeholder="Gender" />

      <input value={city} placeholder="City" />

      <input value={address} placeholder="address" />
      <input value={language} placeholder="language" />





    </div> */}

                <div>
                    <input
                        type="button"
                        value="Save"
                        onClick={togglePopup}
                    />
                    {isOpen && <Popup
                    name={name}
                    surname={surname}
                    years={years}
                    gender={gender}
                    city={city}
                    address={address}
                    language={language}
                
                        content={<>
                        
                        </>}
                        handleClose={togglePopup}
                    />}
                </div>




            </form>

        </div>
    )
}

export default Create