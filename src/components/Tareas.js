//Componente que muestra las actividades (tareas) diarias de una persona
import React,{useState} from 'react'
import {datos} from "./Lista";

 function Tareas() {
    const [listadoTareas,setListadoTareas]=useState(datos);

    console.log("Lista de Tareas")
   // console.log(listadoTareas)

    const eliminar=(item)=>{
        //console.log("dato a eliminar", item)
        if(window.confirm("Confirme que desea eliminar esta tarea?"))
       {
        const nuevaLista= listadoTareas.filter(tarea=>{
            return  tarea.titulo!==item.titulo;
        })

        //console.log("nueva lista",nuevaLista)
        setListadoTareas(nuevaLista);
       }

    }

    return (
        <div>
            <div className='container'>
                <div className='row mt-4'>
                    {
                        listadoTareas.map((item, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                  <div className="card mt-4">
                                    <div className="card header">
                                      <h3>{item.titulo}</h3>
                                      </div>
                                    <div className="card-body">
                                      <p><strong>{item.resposable}</strong></p> 
                                      <p>{item.descripcion}</p>
                                    </div>
                                    <div className='card-footer'>
                                     <mark>{ item.prioridad}</mark> 
                                     <p><button className='btn btn-primary' onClick={()=>eliminar(item)}>Eliminar</button></p>

                                      </div>

                                  </div>
                                </div>
                              );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Tareas;
