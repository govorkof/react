import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://a.deviantart.net/avatars/j/a/jack070.png?7" className={s.logo}></img>





        <div className={s.loginBlock} >
            {props.isAuth ?
                <div> {props.login} - <button onClick={props.logout} >Log out</button> </div>
                : <NavLink to={'/login'}> Login </NavLink>

            }

        </div>

    </header>
}

export default Header