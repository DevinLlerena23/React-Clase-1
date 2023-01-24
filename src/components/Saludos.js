import React from 'react'
//El componente Saluudos, recibe como parametro el nombre de la persona.
//El saludo debe mostrar a esa persona 
//Pase tambien el apellido de la persona 
export default function Saludos(props) {
  return (
    <div>Hola {props.nombre} {props.apellido},bienvenido a la PUCESE</div>
  )
}
