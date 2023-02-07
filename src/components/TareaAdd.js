import React, { useState } from 'react'

export default function TareaAdd({guardarTarea}) {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [responsable, setResponsable] = useState("");
    const [prioridad, setPrioridad] = useState("");

        const guardar=(event)=>{
            event.preventDefault()
            const tareaNueva={
                "titulo":titulo,
                "responsable":responsable,
                "descripcion":descripcion,
                "prioridad":prioridad
            }
            //console.log("nueva tarea: ",tareaNueva )
            guardarTarea(tareaNueva)
        }

        const nuevoTitulo=(event)=>{
            setTitulo(event.target.value)
        }
        const nuevoResponsable =(event)=>{
            setResponsable(event.target.value)
        }
        const nuevaDescripcion=(event)=>{
            setDescripcion(event.target.value)
        }
        const nuevaPrioridad=(event)=>{
            setPrioridad(event.target.value)
        }

    return (
        <div className='row mt-4'>
            <div className="col" >
                <form onSubmit={ guardar}>
                    <div className="card mt-4">

                        <div className="card header">
                            <strong>Nueva Tarea</strong>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="titulo">Titulo de la tarea</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="titulo"
                                    name="titulo"
                                    placeholder="Ingresa el titulo"
                                    value={titulo}
                                    onChange={nuevoTitulo}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripcion tarea</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="descripcion"
                                    name="descripcion"
                                    placeholder="Ingrese la descripcion"
                                    value={descripcion}
                                    onChange={nuevaDescripcion}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reponsable">Responsable tarea</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="responsable"
                                    name="responsable"
                                    placeholder="Ingrese al responsable"
                                    value={responsable}
                                    onChange={nuevoResponsable}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prioridad">Prioridad tarea</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="prioridad"
                                    name="prioridad"
                                    placeholder="Ingrese la prioridad"
                                    value={prioridad}
                                    onChange={nuevaPrioridad}
                                    required
                                />
                            </div>
                        </div>

                        <div className='card-footer'>
                            <button className='btn btn-success'>Guardar</button>
                        </div>

                    </div>
                </form>

            </div>

        </div>
    )
}
