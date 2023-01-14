import './App.css';
import AgregarUsuarios from './components/AgregarUsuarios';
import EditarUsuario from './components/EditarUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header ">
     
        <Navbar  expand="lg" className='fondo-violet'>
          <Container fluid className='container '>
            <Navbar.Brand href="/" className='text-light'>CRUD MERN STACK</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/" className='text-light'>Inicio</Nav.Link>
                <Nav.Link href="agregarusuario" className='text-light'>Agregar Usuarios</Nav.Link>
              </Nav>            
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListaUsuarios />}></Route>
            <Route path='/agregarusuario' element={<AgregarUsuarios />}></Route>
            <Route path='/editarusuario/:idusuario' element={<EditarUsuario />}></Route>
          </Routes>
        </BrowserRouter>


        
      </header>
    </div>
  );
}

export default App;
