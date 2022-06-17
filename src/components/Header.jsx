import React from 'react';
import logo from '../assets/TaskHub.png';

const Header = () => {
    return (
        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
            <h1>Task-Hub</h1>
            <img src={logo} alt="" style={{ width: '40px', borderRadius: '10px' }} />
        </div>
    )
}

export default Header;