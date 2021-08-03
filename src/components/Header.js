import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { routeLinks } from '../utils/route-config-utils';
import RoutePanel from './plugins/RoutePanel';
import './Header.css';

function Header(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <header className="App-header">
                <span className="material-icons menu" onClick={() => setOpen(!isOpen)}>{isOpen ? 'close':'menu'}</span>
                <Link to="/" exact="true">SOUVIK MISRA</Link>
            </header>
            {isOpen ? <RoutePanel routeLinks={routeLinks} toggler={setOpen} />: null}
        </>
        
    );
}

export default Header;