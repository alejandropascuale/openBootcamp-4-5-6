import React, { useState, useEffect } from 'react'

const dataDefault = {
   fecha: new Date(),
   edad: 0,
   nombre: 'Martín',
   apellidos: 'San José'
}

export default function EjercicioFC() {
   const [state, setState] = useState(dataDefault);
   
   const tick = () => {
      setState((state) => {
         let edad = state.edad +1;
         return {
            ...state,
            fecha: new Date(),
            edad
         }
      });
   }

   useEffect(() => {
     let timerID = setInterval (
         () => tick(), 1000
      );

     return () => {
       clearInterval (timerID);
     }
   }, [])
   

  return (
    <div>
      <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
    </div>
  )
}
