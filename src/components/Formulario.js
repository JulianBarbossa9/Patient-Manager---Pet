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
                </form>

            </Fragment>
     );
}
 
export default Formulario;