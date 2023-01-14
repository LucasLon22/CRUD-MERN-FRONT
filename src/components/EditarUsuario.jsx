import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';



const EditarUsuario = () => {
  const params = useParams();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('')

  const navegar = useNavigate();

  useEffect(() => {
    axios.post('/api/usuario/obtenerdatausuario', { idusuario: params.idusuario }).then(res => {
      console.log(res.data[0])
      const datausuario = res.data[0]
      setNombre(datausuario.nombre)
      setEmail(datausuario.email)
      setTelefono(datausuario.telefono)
    })
  }, [])

  //funcion de editar usuario
  const editarUsuario = () => {
    const actualizarUsuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario
    }

    axios.post('/api/usuario/actualizausuario', actualizarUsuario)
      .then(res => {
        // alert(res.data)
        Swal.fire('Felicidades', 'Usuario editado correctamente', 'success')
        navegar('/')
      })
      .then(err => { console.log(err) })
  }
  

  return (
      <>
      <div className='container'>
        <div className='row'>

          <h2 className='mt-4'>Editar Usuario</h2>

        </div>
        <div className='row'>
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor="nombre" className='form-label'>Nombre</label>
              <input type="text" className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
            </div>

            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className='mb-3'>
              <label htmlFor="number" className='form-label'>Celular</label>
              <input type="text" className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
            </div>
            <Button variant="success" onClick={editarUsuario}>Editar Usuario</Button>


          </div>
        </div>
      </div>
      </>
          
   
  )
}

export default EditarUsuario