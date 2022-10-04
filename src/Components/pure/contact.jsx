import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';



const ContactComponent = ({ contact, StateFunc, DeleteFunc }) => {

    const TaskStatusChange = () => {
        return contact.status
            ? <i className='bi bi-toggle2-on' style={{ color: 'green', fontSize: '1.5rem' }}></i>
            : <i className='bi bi-toggle2-off' style={{ color: 'black', fontSize: '1.5rem' }}></i>
    }

    return (
        <tr>
            <th className='col' >{contact.name}</th>
            <td className='col'>{contact.surname}</td>
            <td className='col'>{contact.email}</td>
            <td className='col' onClick={() => StateFunc(contact)}>{TaskStatusChange()}</td>
            <td className='col'>
                <i className='bi bi-trash'
                    style={{ color: 'red', fontSize: '1.5rem' }}
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
