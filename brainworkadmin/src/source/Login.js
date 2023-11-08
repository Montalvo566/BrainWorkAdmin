import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login () {
    return(
        <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary'>
            <div className='40-w p-5 rounded'>
                <form>
                    <h3>Login</h3>
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
                        <label htmlFor='check' className='custom-input-label'>Recordar contraseña</label>
                    </div>

                    <div className='d-grid'>
                        <button className='btn btn-primary'>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;