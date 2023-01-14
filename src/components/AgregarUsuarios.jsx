import React from 'react'
import { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2';





const AgregarUsuarios = () => {

//Hooks
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('')

  const agregarUsuario = () => {
    const usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniquid()
    }
    console.log(usuario)
    //me saca los datos por consola

    axios.post('/api/usuario/agregarusuario', usuario)
      .then(res => {
      // alert(res.data)
        Swal.fire('Felicidades', 'Usuario creado correctamente', 'success')
      })
    .then(err => {console.log(err)})
  }

  return (
    <>
      <div className="App">

        <div className='container '>
          <div className='row'>

            <h2 className='mt-5 text-light'>Crear un nuevo Usuario</h2>

          </div>
          <div className='row'>
            <div className='col-sm-6 offset-3'>
              <div className='mb-3'>
                <label htmlFor="nombre" className='form-label text-light'>Nombre</label>
                <input type="text" className='form-control w-50 m-auto ' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
              </div>

              <div className='mb-3'>
                <label htmlFor="email" className='form-label text-light'>Email</label>
                <input type="email" className='form-control w-50 m-auto' value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>

              <div className='mb-3'>
                <label htmlFor="number" className='form-label text-light'>Celular</label>
                <input type="text" className='form-control w-50 m-auto' value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
              </div>
              <Button variant="success" onClick={agregarUsuario} className='mb-5'>Guardar</Button>


            </div>
          </div>
        </div>

      </div>
     
      </>
  )
}

export default AgregarUsuarios


// quedamos en 1.06 hs