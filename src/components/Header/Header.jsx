import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__logo} src="http://placehold.it/40x40/" alt="L"/>
        </header> 
    )
}

export default Header;