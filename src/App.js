import React, {Fragment} from "react";
import Formulario from "./components/Formulario";


function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="title">
          <h1>Patient Manager</h1>
        </div>

       
        <div className="column-1">
          <div>
            <Formulario />
          </div>
        </div>

        <div className="column-2">
          <p>Columna2</p>
        </div>


      </div>  
    </Fragment>
  );
}

export default App;
