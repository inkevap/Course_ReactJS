/* Partiendo del proyecto final, deberéis utilizar crear un formulario con el que crear tareas. Para hacer esto usaréis:
Formik para el formulario.
Yup para las validaciones. */

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

    const CreatingContact = (state) => {
        SetCreatingState(state);
    }

    const ContactNew = (contact) => {
        const TempContacts = [...Contacts];
        TempContacts.push(contact);
        setContacts(TempContacts);
    }

    return (
        <div className='card bg-dark' style={{ width: '40rem' }}>
            {CreatingNewContact
                ? <span className='card-title text-bg-dark'>
                    <h1>New Contact:</h1>
                </span>

                : <div className='text-bg-dark'>
                    <div className='card-title'>
                        <h1 className='text-decoration-underline'>Your Contacts:</h1>
                    </div>
                    <div className='card-body d-flex flex-column'>
                        {(Contacts.length > 0)
                            ? <table className='table-dark table'>
                                <thead >
                                    <th classname='col-3 d-table-row'>Name</th>
                                    <th classname='col-3'>Surname</th>
                                    <th classname='col-1'>Email</th>
                                    <th classname='col-1'>Online</th>
                                </thead>
                                <tbody className='table-group-divider' >
                                    {
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
                                    }
                                </tbody>
                            </table>
                            : <div>
                                <h4> There're no contacts to be shown</h4>
                                <h6>Add your first contact!</h6>
                            </div>
                        }
                    </div>

                </div>
            }
            <NewContact
                Creating={CreatingContact}
                ContactNew={ContactNew}
            ></NewContact>
        </div>
    );
};


export default ContactListComponent;
