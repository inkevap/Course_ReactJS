import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const NewContact = ({ Creating, ContactNew, Logout }) => {
    const [CreatingState, setCreatingState] = useState(false);

    const initialValues = {
        name: '',
        surname: '',
        email: '',
        status: false
    }

    const registerSchema = yup.object().shape(
        {
            name: yup.string()
                .min(2, 'Name too short!')
                .required('Name is required!'),
            surname: yup.string()
                .min(2, 'Surname too short')
                .required('surname is required'),
            email: yup.string()
                .email('Email not valid')
                .required('Email is required'),
            status: yup.bool().oneOf([true, false], "wrong")
        }
    )

    const CreateState = (state) => {
        Creating(state);
        setCreatingState(state);
    }

    const AmICreating = () => {
        return CreatingState
            ? <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                    ContactNew(Object.assign(values,Contact));
                    CreateState(false);
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
                                <label htmlFor='name'>Name: </label>
                                <Field
                                    id='name'
                                    name='name'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='text'
                                    autoFocus
                                    placeholder='example'
                                />
                            </span>
                            <span className='d-flex align-items-center'>
                                <label htmlFor='surname'>Surname: </label>
                                <Field
                                    id='surname'
                                    name='surname'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='text'
                                    placeholder='example' />
                            </span>
                            <span className='d-flex align-items-center'>
                                <label htmlFor='email'>Email: </label>
                                <Field
                                    id='email'
                                    name='email'
                                    className='flex-fill ms-1 mt-1 mb-1'
                                    type='email'
                                    placeholder='example'
                                />
                            </span>
                            <span className='flex-fill'>
                                <label htmlFor='status'>Online: </label>
                                <Field
                                    id='status'
                                    name='status'
                                    className='flex-fill ms-1 mt-1 mb-3'
                                    type='checkbox'

                                />
                            </span>
                        </span>
                    </div>
                    <div className='card-footer'>
                        <button type="submit" className="btn btn-primary">Create Contact</button>
                        <button type="button" onClick={() => CreateState(false)} className="btn btn-secondary">Cancel</button>
                    </div>
                </Form>
            )
                }
            </Formik>
            : <div className='card-footer'>
                <button type="button" onClick={() => CreateState(true)} className="btn btn-primary ">Create Contact</button>
                <button type="button" onClick={Logout} className="btn btn-secondary ">Logout</button>
            </div>
    }

    return (
        <div>
            {AmICreating()}
        </div>
    )
}

NewContact.propTypes = {
    Creating: PropTypes.func.isRequired,
    ContactNew: PropTypes.func.isRequired,
    Logout: PropTypes.func.isRequired
};

export default NewContact;
