import React from 'react';
import Loginform from '../Components/pure/forms/Loginform';
import PropTypes from 'prop-types';
import { User } from '../models/users.class';

const LoginPage = ({UserList, setLogged}) => {

    return (
        <div>
            <h1>Please Login</h1>
            <Loginform UserList={UserList} setLogged={setLogged}></Loginform>
        </div>

    );
    
}

LoginPage.propTypes = {
    UserList: PropTypes.arrayOf(User).isRequired,
    setLogged: PropTypes.func.isRequired
};

export default LoginPage;
