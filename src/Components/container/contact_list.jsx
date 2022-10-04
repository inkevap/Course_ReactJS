/* Partiendo del proyecto final, deberéis utilizar crear un formulario con el que crear tareas. Para hacer esto usaréis:
Formik para el formulario.
Yup para las validaciones. */

import React, { useState } from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';
import NewContact from '../pure/forms/newContact';
import PropTypes from 'prop-types'

const ContactListComponent = ({Logout}) => {

    const defaultcontact = new Contact('Kevin', 'Pocon', 'inkev.ap@gmail.com', true);
    const defaultcontact2 = new Contact('Calvin', 'Pocon', 'CPF@gmail.com', false);

    const [CreatingNewContact, SetCreatingState] = useState(false);

    const [Contacts, setContacts] = useState([
        defaultcontact, defaultcontact2]);

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
        <div className='card bg-dark' >
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
                                    <th className='col'>Name</th>
                                    <th className='col'>SurName</th>
                                    <th className='col'>Email</th>
                                    <th className='col'>Online</th>
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
                Logout={Logout}
            ></NewContact>
        </div>
    );
};

ContactListComponent.propTypes = {
    Logout: PropTypes.func.isRequired
}

export default ContactListComponent;
