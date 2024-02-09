/* eslint-disable react/prop-types */

import Swal from 'sweetalert2'
function Paciente({paciente, setPaciente, eliminarPaciente}) {

const {nombre, propietario,email, fecha, sintomas, id } = paciente

const handleEliminar=()=>{
const respuesta = confirm('Deseas eliminar este paciente?');
if(respuesta){
  eliminarPaciente(id)
}
}

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
    <p className="font-bold mb-3 text-gray-700  uppercase">Nombre Mascota:
      <span className="font-normal normal-case p-2">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: 
      <span className="font-normal normal-case p-2">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700  uppercase">Email: 
      <span className="font-normal normal-case p-2">{email}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: 
      <span className="font-normal normal-case p-2">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700  uppercase">Sintomas: 
      <span className="font-normal normal-case p-2">{sintomas}</span>
    </p>
<div className="flex justify-between mt-10">
  <button type="button" className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white uppercase font-bold rounded-lg" onClick={() => setPaciente(paciente)}>Editar</button>
  <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg" onClick={handleEliminar}>Eliminar</button>
</div>
  </div>
  )
}

export default Paciente