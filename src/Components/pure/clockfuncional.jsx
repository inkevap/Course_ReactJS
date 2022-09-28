import React, { useState, useEffect } from 'react'

const Clockfuncional = () => {
   const datosInicial = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: 'Martín',
      apellidos: 'San José funcional'
   };

   const [Dato, setDato] = useState(datosInicial);

   useEffect(() =>{


      const timer = setInterval (()=>
         {setDato({
            ...Dato,
            fecha: new Date(),
            edad : Dato.edad + 1
         })}, 1000
      );

      return () => {
         clearInterval (timer);
      }

   });


   return (
      <div>
      <h2>
      Hora Actual:
      {Dato.fecha.toLocaleTimeString()}
      </h2>
      <h3>{Dato.nombre} {Dato.apellidos}</h3>
      <h1>Edad: {Dato.edad}</h1>
      </div>
   )
}

export default Clockfuncional;
