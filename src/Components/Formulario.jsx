import Error from './Error';
import { useState,useEffect } from "react";

const Formulario = ({pacientes,setPacientes}) => {

    const [formmascota, setformmascota]=useState({
        nombre:'',
        propietario:'',
        email:'',
        alta:'',
        sintomas:''
    });
    const[error, setError]=useState(false);

    const generarId =()=>{
        const fecha=Date.now().toString(36);
        const random=Math.random().toString(36).substring(2);
        return fecha+random;
    }
    const handleChange=e=>{

        setformmascota({
            ...formmascota,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit=e=>{
        e.preventDefault();
        if([formmascota.nombre,formmascota.propietario,formmascota.email,formmascota.alta,formmascota.sintomas].includes('')){
            setError(true);
        }else{
           
            setError(false);
            const objetopaciente={
                nombre:formmascota.nombre,
                propietario:formmascota.propietario,
                email:formmascota.email,
                alta:formmascota.alta,
                sintomas:formmascota.sintomas,
                id:generarId()
            }
            setPacientes([...pacientes,objetopaciente]);
            const resetform={
                nombre:'',
                propietario:'',
                email:'',
                alta:'',
                sintomas:''
            }
            setformmascota(resetform);
        }
    }

    
    return ( 
        <div className="md:w-1/2 lg:w-2/5 mb-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade pacientes y{' '}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            <form className="mx-5 bg-white shadow-md rounded-lg py-10 px-10 mb-10s" onSubmit={handleSubmit}
            >
                {error && 
                    <Error>'Todos los campos son obligatorios.'</Error>
                }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    name="nombre"
                    className="focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full p-2 mt-2 placeholder-gray-400 rounded"
                    value={formmascota.nombre}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                    id="propietario"
                    type="text"
                    name="propietario"
                    placeholder="Nombre del propietario"
                    className="focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full p-2 mt-2 placeholder-gray-400 rounded"
                    value={formmascota.propietario}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Contacto Propietario"
                    className="focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full p-2 mt-2 placeholder-gray-400 rounded"
                    value={formmascota.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                    id="alta"
                    type="date"
                    name="alta"
                    className="focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full p-2 mt-2 placeholder-gray-400 rounded"
                    value={formmascota.alta}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                    id="sintomas"
                    placeholder="Describe los sintomas"
                    name="sintomas"
                    className="focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 w-full p-2 mt-2 placeholder-gray-400 rounded"
                    value={formmascota.sintomas}
                    onChange={handleChange}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-boldsss hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar paciente"
                />
            </form>
        </div>
        
     );
}
 
export default Formulario;