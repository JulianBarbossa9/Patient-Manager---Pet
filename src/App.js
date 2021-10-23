import React, {Fragment, useState} from "react";
import Formulario from "./components/Formulario";
import Appoint from "./components/Appoint";



function App() {

  /**
   * Arreglo de citas
   */
  const [appoints, modifiAppoints ] = useState([]);

  //Funcion para guardar tanto la nueva cita como la antigua cita
  const createAppoint = cita => {
    modifiAppoints([
      ...appoints,
      cita
    ]); 
  }

  return (
    <Fragment>
      <div className="container">
        <div className="title">
          <h1>Patient Manager</h1>
        </div>

       
        <div className="column-1">
          <div>
          <h2>Create Appointment</h2>
            <Formulario 
              createAppoint={createAppoint}// Esto es un Prop
            />
          </div>
        </div>

        <div className="column-2">
          
          <div>
            {appoints.map(appoint => (
              <Appoint
              key={appoint.id} 
              appoint={appoint}
              />
            ))}
          </div>
        </div>


      </div>  
    </Fragment>
  );
}

export default App;
