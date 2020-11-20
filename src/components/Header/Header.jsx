import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
        <div className={style.content}>Welcome to ToDo App</div>
    </header>
}

export default Header;