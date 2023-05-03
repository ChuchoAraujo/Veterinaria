import React from "react";
import { Paciente } from "./Paciente";

const ListadoDePacientes = ({ pacientes, setPaciente, paciente }) => {
  


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
      {pacientes && pacientes.length ? 
       <>
       <div>
         <h2 className="font-black text-3xl text-center">ListadoDePacientes</h2>
         <p className="text-xl mt-5 mb-10 text-center">
           Administra tus {""}
           <span className="text-teal-500 font-bold">Pacientes y citas</span>
         </p>
       </div>
 
       <div>
         {pacientes.map(paciente=> (
           <Paciente 
           key={paciente.id} 
           paciente = {paciente}
           setPaciente = {setPaciente}
           />
         ))}
       </div>
       </>

      : 
      <>
       <div>
         <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
         <p className="text-xl mt-5 mb-10 text-center">
           Comienza registrando a {""}
           <span className="text-teal-500 font-bold"> tus pacientes</span>
         </p>
       </div>
      </>
      }

    
    </div>
  );
};

export default ListadoDePacientes;
