import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Link } from 'react-router-dom';

function Login () {
    
    return(
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Inicio de Sesión</h3>
                    <div className='mb-2'>
                        <label>Correo electronico:</label>
                        <input type='email' placeholder='Colocar correo' className='form-control'></input>
                    </div>

                    <div className='mb-2'>
                        <label>Contraseña:</label>
                        <input type='password' placeholder='Colocar contraseña' className='form-control'></input>
                    </div>

                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check'></input>
                        <label htmlFor='check' className='custom-input-label ms-2'>Recordar contraseña</label>
                    </div>

                    <div className='d-grid'>
                        <Link to="/main" className='d-grid'><button className='btn btn-primary'>Iniciar Sesión</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;