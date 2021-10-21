import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Header.scss';

const Header = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="logo" >
            <h1> Best of Utah Moving Co. </h1>
            <div className="head-btns" >
                <button> Employees </button>
                <button> Admin </button>
                <button> Docs </button>
            </div>
        </div>
    )
}
export default withRouter(Header);