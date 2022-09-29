import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';



const ContactComponent = ({ contact, StateFunc, DeleteFunc }) => {

    const TaskStatusChange = () => {
        return contact.status
            ? <i className='bi bi-toggle2-on' style={{ color: 'green', fontSize: '2rem' }}></i>
            : <i className='bi bi-toggle2-off' style={{ color: 'black', fontSize: '2rem' }}></i>
    }

    return (
        <tr>
            <th classname='col-2' >{contact.name}</th>
            <td classname='col-2'>{contact.surname}</td>
            <td classname='col-1'>{contact.email}</td>
            <td classname='col-1' onClick={() => StateFunc(contact)}>{TaskStatusChange()}</td>
            <td classname='col-1'>
                <i className='bi bi-trash'
                    style={{ color: 'red', fontSize: '2rem' }}
                    onClick={() => DeleteFunc(contact)}></i>
            </td>
        </tr>
    );

};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    StateFunc: PropTypes.func.isRequired,
    DeleteFunc: PropTypes.func.isRequired,
};


export default ContactComponent;
