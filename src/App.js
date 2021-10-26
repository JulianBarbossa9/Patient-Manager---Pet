import React, {Fragment, useState, useEffect} from "react";// {  } lo que esta dentro de los corchetes es un HOOK!!
import Formulario from "./components/Formulario";
import Appoint from "./components/Appoint";



function App() {

  /**
   * Local Storage
   */

  let initialAppoints = JSON.parse(localStorage.getItem('appoints'));
  if(!initialAppoints){
    initialAppoints = []; 
  }

  /**
   * Arreglo de citas
   */
  const [appoints, modifiAppoints ] = useState(initialAppoints);

  /**
   * Use Effect para realizar algunas operaciones cuando el state cambia, (useEffecto) no tiene nada que ve con almacenar en el storage, basicamente se recarga automaticamente cada vez que el state cambie 
   */
  useEffect( () => {
    if(initialAppoints){
      localStorage.setItem('appoints',JSON.stringify(appoints));
    } else {
      localStorage.setItem('appoints',JSON.stringify([]));
    }
  }, [appoints]); 

  //Funcion para guardar tanto la nueva cita como la antigua cita
  const createAppoint = cita => {
    modifiAppoints([
      ...appoints,
      cita
    ]); 
  }

  //1
  //2
  //3 --- id = 2 || appoint.id !== 2

  // Función que elimina una cita por el id ---- Es decir que me traiga los id diferentes y que no sea diferente eliminemelo
  const eliminarAppoint = id => {
    const auxAppoints = appoints.filter(appoint => appoint.id !== id);
    modifiAppoints(auxAppoints);
  }

  // Mensaje condicional
  // console.log(appoints.length)
  const titleAppoints = appoints.length === 0 ? "No appointments" :"Manage your Appointments";

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
          <h2>{titleAppoints}</h2>
            {appoints.map(appoint => (
              <Appoint
              key={appoint.id} 
              appoint={appoint}
              eliminarAppoint={eliminarAppoint}
              />
            ))}
          </div>
        </div>


      </div>  
    </Fragment>
  );
}

export default App;
