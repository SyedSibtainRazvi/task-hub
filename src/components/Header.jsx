import React from 'react';
import logo from '../assets/TaskHub.png';

const Header = () => {
    return (
        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
            <img src={logo} alt="" style={{ width: '40px', borderRadius: '10px' }} />
            <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Task-Hub</h1>
        </div>
    )
}

export default Header;


