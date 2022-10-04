/* Crear el sistema de enrutado de la aplicación en React:
Permitir la navegación de Login a Registro y viceversa
No podremos acceder a Tareas a no ser que nos hayamos log */

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { User } from '../../../models/users.class';



const registerSchema = yup.object().shape(
    {
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required')
            .getDefault(),
        password: yup.string()
            .required('Password is required')
    }
)

const Loginform = ({ UserList, setLogged }) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    const Log = (values) => {
       setLogged(localStorage.setItem('credentials', values))
    } 

    const GoToRegister = () => {
        history('/register');
    }

    return (
        <div>
            <Formik
                initialValues={initialCredentials}
                validationSchema={registerSchema}
                onSubmit={ (values) => {
                    let UserListTemp = [...UserList];
                
                    (UserList[
                        UserListTemp.findIndex(user => user.email === values.email)
                        ]
                        .password === values.password)

                        ? Log(values)
                        : alert("Contraseña o Email incorrectos")
                    
                }}
            >{({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                <Form>
                    <div className='form-control d-flex flex-column align-items-center text-bg-dark'>
                        <span className='d-flex flex-column'>
                            <span className='d-flex align-items-center'>
                                <label htmlFor='email'>Email: </label>
                                <Field
                                    id='email'
                                    name='email'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='email'
                                    autoFocus
                                    placeholder='example'
                                />
                            </span>
                            <span className='d-flex align-items-center'>
                                <label htmlFor='password'>Password: </label>
                                <Field
                                    id='password'
                                    name='password'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='password'
                                    placeholder='example' />
                            </span>
                        </span>
                    </div>
                    <div className='card-footer'>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="button" onClick={GoToRegister} className="btn btn-secondary">Register</button>
                    </div>
                </Form>
            )
                }
            </Formik>
        </div>
    );
}

Loginform.propTypes = {
    UserList: PropTypes.arrayOf(User).isRequired,
    setLogged: PropTypes.func.isRequired
};

export default Loginform;
