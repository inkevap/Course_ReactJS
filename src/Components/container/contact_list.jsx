/* En este ejercicio de React JS deberéis crear una lista, 
esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:
Mostrar contacto. Crear contacto. Eliminar contacto. Cambiar el estado del contacto entre Conectado
 y Desconectado. */

import React, { useState } from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';
import NewContact from '../pure/forms/newContact';

const ContactListComponent = () => {

    const defaultcontact = new Contact('Kevin', 'Pocon', 'inkev.ap@gmail.com', true);
    const defaultcontact2 = new Contact('Calvin', 'Pocon', 'CPF@gmail.com', false);
    const defaultcontact3 = new Contact('Calvin', 'Pocon', 'CPF@gmail.com', false);
    const defaultcontact4 = new Contact('Calvin', 'Pocon', 'CPF@gmail.com', false);
    const defaultcontact5 = new Contact('Calvin', 'Pocon', 'CPF@gmail.com', false);
    const defaultcontact6 = new Contact('Calvin', 'Pocon', 'CPF@gmail.com', false);

    const [CreatingNewContact, SetCreatingState] = useState(false);

    const [Contacts, setContacts] = useState([
        defaultcontact, defaultcontact2, defaultcontact3, defaultcontact4,
        defaultcontact5, defaultcontact6]);

    const StatusChange = (contact) => {
        const TempContacts = [...Contacts];
        const index = TempContacts.indexOf(contact);
        TempContacts[index].status = !TempContacts[index].status;
        console.log("Estado cambiado")
        setContacts(TempContacts);
    }

    const Delete = (contact) => {
        const TempContacts = [...Contacts];
        const index = TempContacts.indexOf(contact);
        TempContacts.splice(index, 1);
        setContacts(TempContacts);
    }

    const CreatingContact = () => {
        SetCreatingState(!CreatingNewContact);
    }

    const ContactNew = (contact) => {
        const TempContacts = [...Contacts];
        TempContacts.push(contact);
        setContacts(TempContacts);
    }

    return (
        <div className='card' style={{ width: '40rem' }}>
            {CreatingNewContact
                ? <span className='card'>
                    <h1>New Contact:</h1>
                </span>

                : <span className='card'>
                    <h1>Your Contacts:</h1>
                    <table>
                        <thead>
                            <th classname='col-3'>Name</th>
                            <th classname='col-3'>Surname</th>
                            <th classname='col-1'>Email</th>
                            <th classname='col-1'>Online</th>
                        </thead>
                        <tbody >
                            {(Contacts.length > 0)
                                ?
                                Contacts.map((cont, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={cont}
                                            StateFunc={StatusChange}
                                            DeleteFunc={Delete}
                                        >
                                        </ContactComponent>)
                                }
                                )
                                : <tr >
                                    <td>There's no contacts to show, create one.</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </span>}
            <NewContact
                Creating={CreatingContact}
                ContactNew={ContactNew}
            ></NewContact>
        </div>
    );
};


export default ContactListComponent;
