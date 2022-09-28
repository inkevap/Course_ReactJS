import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ Contact }) => {
    return (
        <div>
            <h2>
                Nombre: { Contact.name }
            </h2>
            <h3>
                Apellido: { Contact.surname }
            </h3>
            <h4>
                Email: { Contact.email }
            </h4>
            <h5>
                Este contacto se encuentra: { Contact.status ? '✅ Conectado':'❌ No Disponible' }
            </h5>
            
        </div>
    );
};


ContactComponent.propTypes = {
    Contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
