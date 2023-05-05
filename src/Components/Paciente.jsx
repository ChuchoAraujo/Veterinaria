import React, { useState } from "react";

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const [showModal, setShowModal] = useState(false); // Crear modal e iniciarlo en false
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;
  
  // funcion para mostrar el modal
  const handleShowModal = () => {
    setShowModal(true);
  };
   // funcion para ocultar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  // funcion para eliminar elemento y cerrar el modal
  const handleEliminar = () => {
    eliminarPaciente(id)
    handleCloseModal()
  };

  return (
    <>
    <div>
      {showModal && 
      <div className="modal">
        <div className="modal-content">
          <p>¿Quieres eliminar el paciente?</p>
          <div className="modal-buttons">
          <button
            onClick={handleCloseModal}
            >
              Cancelar
            </button>

            <button 
            onClick={handleEliminar}>
              Eliminar
            </button>
          </div>
        </div>
      </div>}
    </div>


    <div
      className="mx-5 my-10
     bg-white shadow-md px-5 py-10 rounded-xl"
    >
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-start">
        <button
          className="py-2 px-7 bg-teal-500 
      text-white font-bold uppercase rounded-md"
          onClick={() => setPaciente(paciente)}
          type="button"
        >
          Editar
        </button>

        <button
          onClick={handleShowModal}
          className="py-2 px-6 ml-2 bg-yellow-500 
      text-white font-bold uppercase rounded-md"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
    </>
  );
};
