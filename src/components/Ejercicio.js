//Diseñe eñ componenete que muestre su nombre , edad y pasatiempo
//A continuacion, muestrelo 2 veces en su aplicacion  
//Modifique el componente para que los datos sean parametrizados 
import React from 'react'

export default function Ejercicio(props) {
  return (
    <div>
        <p>Mi nombre es {props.nombre}</p>
        <p>Tengo {props.edad}</p>
        <p>Mi pasatiempo favorito es <strong>{props.pasatiempo}</strong></p> 

    </div>
  )
}
