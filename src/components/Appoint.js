import React from "react";// imr

const Appoint = ({appoint,eliminarAppoint}) => ( //deleteAppoint
    
    
             <div className="appoints">
                <p>Pet : <span>{appoint.pet}</span></p>
                <p>Name Owner : <span>{appoint.ownerName}</span></p>
                <p>Date : <span>{appoint.date}</span></p>
                <p>Hour : <span>{appoint.hour}</span></p>
                <p>Symptom : <span>{appoint.symptom}</span></p>

                <button
                    className="button-delete"
                    onClick = { () => eliminarAppoint(appoint.id)}// Tiene que ser arrow fucntion para que espere a que pase el oneclick
                >Delete</button>
             </div>
       
    );

 
export default Appoint;
