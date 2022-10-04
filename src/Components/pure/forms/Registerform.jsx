/* Crear el sistema de enrutado de la aplicación en React:
Permitir la navegación de Login a Registro y viceversa
No podremos acceder a Tareas a no ser que nos hayamos log */

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../models/users.class';

const registerSchema = yup.object().shape(
    {
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required')
            .getDefault(),
        password: yup.string()
            .required('Password is required'),
        confirm: yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: yup.string().oneOf(
                    [yup.ref("password")],
                    '¡Passwords must match!'
                )
            }).required('You must confirm the password')
    }
)

const Registerform = ({Register}) => {
    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    const GoToLogin = () => {
        history('/login');
    }

    return (
        <div>
            <Formik
                initialValues={initialCredentials}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    Register(new User(values.email,values.password))
                    alert(`Se ha creado una cuenta con el correo: ${values.email}`)
                    history('/login')
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
                                <label htmlFor='email'>Email : </label>
                                <Field
                                    id='email'
                                    name='email'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='email'
                                    autoFocus
                                    placeholder='example@example.com'
                                />
                            </span>
                            <span className='d-flex align-items-center'>
                                <label htmlFor='password'>Password: </label>
                                <Field
                                    id='password'
                                    name='password'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='password'
                                    placeholder='example123' />
                            </span>
                            <span className='d-flex align-items-center'>
                                <label htmlFor='confirm'>Confirm password : </label>
                                <Field
                                    id='confirm'
                                    name='confirm'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='password'
                                    placeholder='example123' />
                            </span>
                        </span>
                    </div>
                    <div className='card-footer'>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <button type="button" onClick={GoToLogin} className="btn btn-secondary">Login</button>
                    </div>
                </Form>
            )
                }
            </Formik>
        </div>
    );
}

Registerform.propTypes = {
    Register: PropTypes.func.isRequired
}

export default Registerform;
