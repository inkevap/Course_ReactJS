
import React from 'react';
import PropTypes from 'prop-types';
import ContactListComponent from '../Components/container/contact_list';

const ContactPage = ({Logout}) => {

    return (
        <div>
            <ContactListComponent Logout={Logout}></ContactListComponent>
        </div>

    );
    
}

ContactPage.propType = {
    Logout: PropTypes.func.isRequired 
}

export default ContactPage;
