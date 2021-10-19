import React, {Fragment, useState} from "react";

const Formulario = () => {

/**
 * Crear State de las citas
 */

const [appoint, modifyAppoint] = useState({
    pet: '',
    ownerName: '',
    date: '',
    hour: '',
    symptom: ''
});

// Función que se ejecuta cuanto un usuario escribe un input

const handleChange = () =>{
    console.log('escribe?');
}

    return ( 
            <Fragment>
                <h2>Create Appointment</h2>

                <form>
                    <label>The pe'ts Name: </label>
                    <input
                        type="text"
                        name="pet"
                        className="namePet"
                        placeholder="Pet's name"
                        onChange={handleChange} //Cada vez que el usuario escribe algo se ejecuta el onChange
                    />
                    <label>Owner's Name: </label>
                    <input
                        type="text"
                        name="ownerName"
                        className="nameOwner"
                        placeholder="Owner's name"
                        onChange={handleChange} 
                    />
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date"
                        className="date"
                        onChange={handleChange} 
                    />
                    <label>Hour: </label>
                    <input
                        type="time"
                        name="hour"
                        className="hour"
                        onChange={handleChange} 
                        />
                    <label>Symptom: </label>
                    <textarea
                        name="symptom"
                        className="coment"
                        onChange={handleChange} 
                    ></textarea>

                    <button
                        type="submit"
                        className="button-primary"
                    >Add Appointment</button>
                </form>

            </Fragment>
     );
}
 
export default Formulario;