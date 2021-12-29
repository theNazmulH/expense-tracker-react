import React from 'react';
import Avatar from '../img/avatar.png';

export default function Header() {
    return (
        <div className='header'>
            <div className="avatar">
                <img src={Avatar} alt="Avatar" />
            </div>
            <div className="hello">
                <span>Welcome!</span>
                <h3>Nazmul Hussain</h3>
             </div>
        </div>
    )
}
