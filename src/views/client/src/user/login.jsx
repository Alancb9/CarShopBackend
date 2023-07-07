import React from 'react';
import ButtonForm from '../components/buttons/buttonForm';
import TituloForm from '../components/titles/TituloForm';
import { Link } from 'react-router-dom';



const Login = () => {




    return (
        <div className='container-fluid mt-5'>
            <div className="row">
                <div className="col-12 col-md-4" style={{ width: '30%' }}>
                    <form action="">
                        <div>
                            <TituloForm className={'text-center'} text='Ingrese a su cuenta' />
                        </div>
                        <div>
                            <label htmlFor="">Correo: </label>
                            <input type="email" placeholder='Ingrese su correo' />
                        </div>
                        <div>
                            <label htmlFor="">Contraseña: </label>
                            <input type="text" placeholder='Ingrese su contraseña' />
                        </div>

                        <div>
                            <p className="text-center">
                                ¿No tienes una cuenta?{' '}
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    Registrarse
                                </Link>
                            </p>
                        </div>


                        <ButtonForm typeButton='submit' classButton='btn btn-primary' text='Ingresar' />
                    </form>

                </div>
                <div className="col-12 col-md-8" style={{ width: '70%' }}>
                    Proximamente imagen
                </div>
            </div>

        </div>
    );


};

export default Login;