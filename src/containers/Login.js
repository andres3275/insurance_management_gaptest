import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/user.service';

export const Login = () => {
    const [input, setInput] = useState({});
    const history = useHistory();

    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleLogin = async () => {
        history.push("/insurance-management");
	const token = await login(input.userName, input.password);
        if(token){
            history.push("/insurance-management");
        }
    }

    return (
        <Fragment>
            <input type="text" onChange={handleInputChange} name="userName" />
            <input type="text" onChange={handleInputChange} name="password" />
            <button onClick={handleLogin}>Login</button>
        </Fragment>
    );
}
