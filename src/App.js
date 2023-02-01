
import './App.css';
import Ejercicio from './components/Ejercicio';
import Saludos from './components/Saludos';
import Tareas from './components/Tareas';
import {datos} from './components/Lista';
import { useState } from 'react';
import TareaAdd from './components/TareaAdd';

function App() {
  const[data,setData]= useState(datos)

  const eliminarClick=(item)=>{
    console.log("eliminando tarea",item.titulo)
    if(window.confirm("Confirme que desea eliminar esta tarea?"))
    {
     const nuevaLista= data.filter(tarea=>{
         return  tarea.titulo!==item.titulo;
     })

     //console.log("nueva lista",nuevaLista)
     setData(nuevaLista);
    }
  }
  const guardarTarea=(tarea)=>{
    console.log("esta es la nueva tarea", tarea)
    setData([...data,tarea])
  }
  return (
    
    <div className="App">
     <h1>Primeros pasos con REACT</h1>
     <h2>Bienvenidos</h2>
     <Saludos nombre="Devin" apellido="Llerena"/>
     <Ejercicio nombre=" Devin Llerena" edad=" 18 años " pasatiempo=" jugar videojuegos"/>
    
    <div className='row'>
      <div className='col-2'>
          <TareaAdd guardarTarea={guardarTarea}/>
      </div>
      <div className='col-10'>
        <Tareas datos={data} eliminarClick={eliminarClick}/>
      </div>
      
    </div>
    

    </div>
   
  );
}

export default App;
