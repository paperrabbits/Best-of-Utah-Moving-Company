import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios.post(email, password)
    }

    return (
        <div>
            <p>Email</p>
            <input 
                placeholder="email address" 
                value={email}  
                onChange={(evt) => setEmail(evt.target.value)}
                />
            <p>Password</p>
            <input 
                placeholder="password" 
                type="password" 
                value={password} 
                onChange={(evt) => setPassword(evt.target.value)}
                />
            <button 
                onClick={login} > Login 
            </button>
        </div>
    )
}
export default withRouter(Auth);