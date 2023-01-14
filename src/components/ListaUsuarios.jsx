import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import UsuarioIndividual from './UsuarioIndividual'


const ListaUsuarios = () => {

  const [datausuarios, setDatausuarios] = useState([]);

  useEffect(() => {
    axios.get('api/usuario/obtenerusuarios').then(res => {
      console.log(res.data)
     setDatausuarios(res.data)
    }).catch(err => {
        console.log(err)
    })
  
    
  }, [])

  //MAPEAR LISTA DE USUARIOS EN OBJETO USUARIOS
  const listausuarios = datausuarios.map(usuario => {
    return (
      <div>
        <UsuarioIndividual usuario={usuario} />
      </div>
    )
  })
  
  return (
      <>
          
      <h1 className='text-light mb-5 mt-5'>Lista de Usuarios</h1>
      {listausuarios}
         
      </>
  )
}

export default ListaUsuarios