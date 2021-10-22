import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../redux/dux/userReducer';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        axios.post('/api/register', {email, password})
        // .then(data => props.setUser(data))
        .then(res => {
            props.setUser(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
        console.log('DATA:', email, password);
    }

    // .then(player => {
    //     props.setPlayer(player.data)
    //     props.loggedIn(player.data)
    //     console.log(player.data)
        
    //     if (player.statusText === 'Accepted') {
    //         console.log(player.statusText, '++')
    //         // checkRoute()
    //     } else {
    //         console.log(player.statusText, '--')
    //     }
    // })
    // .catch(error => console.log(error))

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
                onClick={register} > Register
            </button>
        </div>
    )
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {setUser})(withRouter(Auth));