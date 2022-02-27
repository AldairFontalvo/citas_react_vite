import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes}) => {
    return (
        
        
        <div className="md:w-1/2 lg:w-3/5s">
            {pacientes && pacientes.length?(
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Administra tus {' '}
                        <span className="text-indigo-600 font-bold">pacientes y citas</span>
                    </p>
                    <div className="md:h-screen overflow-scroll">
                        {
                            pacientes.map((paciente)=>(
                                <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                />
                            ))
                        }
                        
                    </div>
                </>
                ):(
                    <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">comienza agregando pacientes {' '}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                    </>
                )
            }
            
        </div>
    );
}
 
export default ListadoPacientes;