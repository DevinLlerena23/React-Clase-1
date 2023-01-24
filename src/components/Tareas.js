//Componente que muestra las actividades (tareas) diarias de una persona
import React from 'react'

export default function Tareas() {
    const listadoTareas=[
        {
            titulo:"Estudiar Fisica",
            responsable: "Pedro Alvarado",
            descripcion:"Leer el capitulo 5 pagina 67",
            prioridad:"mediana"
        },
        {
            titulo:"Reparar Computadoras",
            responsable: "Galo del Castillo",
            descripcion:"Cambiar el disco duro",
            prioridad:"alta"
        },
        {
            titulo:"Entrenar futbol",
            responsable: "Enrique Ponce",
            descripcion:"Una hora de trabajo tecnico y tactico",
            prioridad:"baja"
        },
    ];

    console.log("Lista de Tareas")
    console.log(listadoTareas)
  return (
    <div>
        <ul>
            {
                listadoTareas.map((item, index)=>{
                    return <li key={index}>{item.titulo}</li>
                })
            }
        </ul>
    </div>
  )
}
