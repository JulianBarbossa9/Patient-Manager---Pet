import React, {Fragment, useState} from "react";

const Formulario = () => {

/**
 * Crear State de las citas
 */
const [appoint, modifyAppoint] = useState({ //Objeto con ciertas propiedades 
    pet: '',
    ownerName: '',
    date: '',
    hour: '',
    symptom: ''
});

 
/**
 * Creo otro state cuando no hayan llenado todo 
 */

const [error, modifyError] = useState(false);

// Función que se ejecuta cada que el usuario escribe un input
const handleChange = (e) =>{
    // console.log(e.target.name);//Con esto sabemos en que campo esta escribiendo si escribimos en el campo que dice "The pet's name" vota como valor "pet"
    // console.log(e.target.value);
    modifyAppoint({
        ...appoint, // Hacemos una copia de "state" ---> siempres se debe poner el state porque o si no se borra los nuevos valores 
        [e.target.name]: e.target.value
    })
}

const submitAppoint = e =>{
    e.preventDefault();

    //Validar la info
    if(pet.trim() === '' || ownerName.trim() === '' || date.trim() === '' || hour.trim() === '' || symptom.trim() === ''){
        modifyError(true);
        return;
    }

    
    
    //Asignar un ID


    // Crear la cita --- colocarla en el state principal


    //Reiniciar el Form
}

//Extraer los valores ---> la otra forma es appoint.pet, appoint.ownerName
const {pet, ownerName, date, hour, symptom } = appoint; 

    return ( 
            <Fragment>
                <h2>Create Appointment</h2>

                <form
                    onSubmit={submitAppoint}
                    >
                    <label>The pe'ts Name: </label>
                    <input
                        type="text"
                        name="pet"
                        className="namePet"
                        placeholder="Pet's name"
                        onChange={handleChange} //Cada vez que el usuario escribe algo se ejecuta el onChange
                        value={pet}
                        />
                    <label>Owner's Name: </label>
                    <input
                        type="text"
                        name="ownerName"
                        className="nameOwner"
                        placeholder="Owner's name"
                        onChange={handleChange} 
                        value={ownerName}
                        />
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date"
                        className="date"
                        onChange={handleChange} 
                        value={date}
                        />
                    <label>Hour: </label>
                    <input
                        type="time"
                        name="hour"
                        className="hour"
                        onChange={handleChange} 
                        value={hour}
                        />
                    <label>Symptom: </label>
                    <textarea
                        name="symptom"
                        className="coment"
                        onChange={handleChange} 
                        value={symptom}
                        ></textarea>
                        {/* Mensaje de error */}
                        {error ? <p className="alert-error">¡¡Please fill in All fields!!</p> : null}

                    <button
                        type="submit"
                        className="button-primary"
                        >Add Appointment</button>
                </form>

            </Fragment>
     );
    }
    
    export default Formulario;