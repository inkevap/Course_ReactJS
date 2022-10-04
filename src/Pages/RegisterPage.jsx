

import React from 'react';
import PropTypes from 'prop-types';
import Registerform from '../Components/pure/forms/Registerform';

const RegisterPage = ({Register}) => {

    const RegisterUsers = (user) => {
        Register(user);
      }
      
    return (
        <div>
            <h1>Please Register</h1>
            <Registerform Register={RegisterUsers}></Registerform>
        </div>

    );
    
}

RegisterPage.propTypes = {
    Register: PropTypes.func.isRequired
};

export default RegisterPage;
