import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoDePacientes from './Components/ListadoDePacientes';
import { useEffect, useState } from 'react';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(pacientesActualizados);
  };

  const agregarPaciente = (nuevoPaciente) => {
    setPacientes([...pacientes, nuevoPaciente]);
  };

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          agregarPaciente={agregarPaciente}
        />
        <ListadoDePacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

      <h1 className='text-3xl font-bold underline'></h1>
    </div>
  );
}

export default App;
