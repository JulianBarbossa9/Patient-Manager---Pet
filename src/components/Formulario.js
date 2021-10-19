import React, {Fragment} from "react";

const Formulario = () => {
    return ( 
            <Fragment>
                <h2>Esto es un formulario</h2>

                <form>
                    <label>The pe'ts name: </label>
                    <input
                        type="text"
                        name="mascota"
                        className="namePet"
                        placeholder="pet's name"
                    />
                    <label>Owner's name: </label>
                    <input
                        type="text"
                        name="ownerName"
                        className="nameOwner"
                        placeholder="Owner's name"
                    />
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date"
                        className="date"
                    />
                    <label>Deportune Time: </label>
                    <input
                        type="time"
                        name="hour"
                        className="hour"
                    />
                    <label>Symptom: </label>
                    <textarea
                        className="coment"
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