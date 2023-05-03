import React from 'react'

export const Paciente = ({paciente, setPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente

 
  return (
   
    <div className='mx-5 my-10
     bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
      <span className='font-normal normal-case'>{nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
      <span className='font-normal normal-case'>{propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
      <span className='font-normal normal-case'>{email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}
      <span className='font-normal normal-case'>{fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
      <span className='font-normal normal-case'>{sintomas}</span>
    </p>

    <div className='flex justify-start'>
      <button className='py-2 px-7 bg-teal-500 
      text-white font-bold uppercase rounded-md'
      onClick={() => setPaciente(paciente)} 
      type='button'>Editar</button>

      <button 
      className='py-2 px-6 ml-2 bg-yellow-500 
      text-white font-bold uppercase rounded-md'
      type='button'>Eliminar</button>
    </div>

  </div>
  )
}
