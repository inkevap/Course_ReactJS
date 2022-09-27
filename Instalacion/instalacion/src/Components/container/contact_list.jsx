import React, { useState } from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    
    const [status, setonline] = useState(false);

    const ContactState = () => {
        status ? setonline(false) : setonline(true);
    }

    const defaultcontact = new Contact('Kevin','Pocon','inkev.ap@gmail.com',status);

    return (
        <div>
            <div>
                <h1>Tus contactos:</h1>

            </div>
            <ContactComponent Contact={defaultcontact}></ContactComponent>
            <button onClick={ContactState}>Cambiar disponibilidad</button>
        </div>
    );
};


export default ContactListComponent;
