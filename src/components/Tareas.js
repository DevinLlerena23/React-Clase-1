//Componente que muestra las actividades (tareas) diarias de una persona
import React from 'react'
import { listadoTareas } from "./Lista";
export default function Tareas() {
    

    console.log("Lista de Tareas")
    console.log(listadoTareas)
  return (
    <div>
        <ul>
            {
                listadoTareas.map((item, index)=>{
                    return <li key={index}>{item.titulo},
                    <div>resposable: {item.resposable}</div> 
                    <div>descripcion:{item.descripcion}</div>
                    <div>prioridad: {item.prioridad}</div>
                    </li>
                    
                })
            }
        </ul>
    </div>
  )
}
