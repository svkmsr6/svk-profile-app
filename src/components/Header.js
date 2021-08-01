import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

function Header(props) {
    return (
        <header className="App-header">
            {
                props.routeLinks.map((link, idx) => <NavLink key={idx} to={link.url} activeClassName="active" exact={link.exact} >{link.text}</NavLink>)
            }
        </header>
        
    );
}

export default Header;