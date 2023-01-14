import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Swal from 'sweetalert2'


const UsuarioIndividual = ({ usuario }) => {
  
//para animacion de scroll
  
useEffect(() => {
  AOS.init()
}, [])




  const navegar = useNavigate();
  
  //funcion para borrar usuario


  const borrarUsuario = (idusuario) => {
    axios.post('/api/usuario/borrarusuario', { idusuario: idusuario }).then(res => {
      console.log(res.data)
      // alert(res.data)
      Swal.fire('Felicidades', 'Usuario Borrado correctamente', 'info')
      navegar(0)
    }).catch(err => {
      console.log(err)
    })
    
  }


  return (
      <>
      <div className='container fondo-agregarUsuarios'>
        <div className='row '>
          <div className='col-sm-6 offset-3' data-aos="flip-right">
            <ul className='list-group '>
              <li className='list-group-item fondo-agregarUsuarios'>{usuario.idusuario}</li>
              <li className='list-group-item fondo-agregarUsuarios'>{usuario.nombre}</li>
              <li className='list-group-item fondo-agregarUsuarios'>{usuario.email}</li>
              <li className='list-group-item fondo-agregarUsuarios'>{usuario.telefono}</li>
            </ul>
            
            <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-light mt-3 me-2'>Editar</li></Link>
            &nbsp;
            <button className='btn btn-light mt-3 ms-2' onClick={() =>{borrarUsuario(usuario.idusuario)}}>Borrar</button>
            <hr className='mt-4' />
          </div>
        </div>
        
      </div>
      </>
  )
}

export default UsuarioIndividual