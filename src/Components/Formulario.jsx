import React, { useState } from 'react'
import { Error } from './Error'

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
    }
    else {
      setError(false)

      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        fecha, 
        sintomas,
        id: generarId()
      }
      setPacientes([...pacientes, objetoPaciente ]);
      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")
    }
  }

  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
      <p className='text.lg mt-5 text-center mb-10'>
        Añade pacientes y {''}
        <span className='text-teal-500 font-bold'>Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className='bg-white shadow lg rounded-lg py-10 px-5 mb-10'
      >
        {error && 
        <Error>
          <p>"Todos los campos sob obligatorios"</p>
          </Error>}
        <div className='mb-5'>
          <label 
          htmlFor='mascota'
          className='block text-gray-700 uppercase font-bold'
          >
            Nombre mascota
            </label>
          <input 
          id='mascota'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Nombre de la mascota' />
        </div>
        <div className='mb-5'>
          <label 
          htmlFor='propietario'
          className='block text-gray-700 uppercase font-bold'
          >
            Nombre propietario
            </label>
          <input 
          id='propietario'
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Nombre del propietario' />
        </div>
        <div className='mb-5'>
          <label 
          htmlFor='email'
          className='block text-gray-700 uppercase font-bold'
          >
            Email
            </label>
          <input 
          id='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          placeholder='Email contacto  ' />
        </div>
        <div className='mb-5'>
          <label 
          htmlFor='alta'
          className='block text-gray-700 uppercase font-bold'
          >
            Fecha alta
            </label>
          <input 
          id='alta'
          value={fecha}
          onChange={(e)=> setFecha(e.target.value)}
          type="date"
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           />
        </div>
        <div className='mb-5'>
          <label 
          htmlFor='sintomas'
          className='block text-gray-700 uppercase font-bold'
          >
            Sintomas
            </label>
          <textarea 
          id='sintomas'
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
          className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          placeholder='Describe los sintomas'/>
        </div>

        <input 
        type="submit"
        className='bg-teal-500 w-full p-3 text-white uppercase font-bold hover:bg-teal-700 cursor-pointer transition-all' 
        value="Agregar paciente"/>
      </form>



      </div>
  )
}

export default Formulario