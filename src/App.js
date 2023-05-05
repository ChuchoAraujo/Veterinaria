import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoDePacientes from './Components/ListadoDePacientes';
import { useState } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id )
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
      <Formulario 
      pacientes = {pacientes}
      setPacientes = {setPacientes}
      paciente = {paciente}
      setPaciente = {setPaciente}
      />
      <ListadoDePacientes 
      pacientes = {pacientes}
      setPaciente= {setPaciente}
      paciente = {paciente}
      eliminarPaciente = {eliminarPaciente}
      />
      </div>
      
      <h1 className="text-3xl font-bold underline">
  </h1>
    </div>

  );
}

export default App;
