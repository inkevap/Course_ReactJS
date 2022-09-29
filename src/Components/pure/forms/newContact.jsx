import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const NewContact = ({ Creating, ContactNew }) => {
    const [CreatingState, setCreatingState] = useState(false);

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');
    const statusRef = useRef(false);

    const CreateState = () => {
        Creating();
        setCreatingState(!CreatingState);
    }

    const SendNewContact = (e) => {
        e.preventDefault();
        ContactNew(new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            statusRef.current.checked));
            CreateState();
    }

    const AmICreating = () => {
        return CreatingState
            ? <form onSubmit={SendNewContact}>
                <div className='d-flex flex-column align-items-center'>
                    <span className='d-flex flex-column'>
                        <span className='d-flex align-items-center'>Name:
                            <input ref={nameRef} id='Name' className='flex-fill ms-1 mt-1 mb-1' type={'text'} required autoFocus></input>
                        </span>
                        <span className='d-flex align-items-center'>Surname:
                            <input ref={surnameRef} id='Surname' className='flex-fill ms-1 mt-1 mb-1' type={'text'} required></input>
                        </span>
                        <span className='d-flex align-items-center'>Email:
                            <input ref={emailRef} id='Email' className='flex-fill ms-1 mt-1 mb-1' type={'email'} required></input>
                        </span>
                        <span className='flex-fill'>Online:
                            <input ref={statusRef} id='status' className='flex-fill ms-1 mt-1 mb-3' type={'checkbox'}></input>
                        </span>
                    </span>
                    <button type="submit" class="btn btn-primary">Create Contact</button>
                    <button type="button" onClick={CreateState} class="btn btn-secondary">Cancel</button>
                </div>
            </form>
            : <div>
                <button type="button" onClick={CreateState} class="btn btn-primary ">Create Contact</button>
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
    ContactNew: PropTypes.func.isRequired
};

export default NewContact;
