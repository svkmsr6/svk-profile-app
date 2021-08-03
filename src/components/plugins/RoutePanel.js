import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './RoutePanel.css';

function RoutePanel(props) {
    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';
        return () => {
            document.querySelector('body').style.overflow = 'auto';
        }
    },[]);
    return (
        <div className="route-panel">
            <div className="route-panel-links">
                {
                props.routeLinks.map((link, idx) => (
                <NavLink 
                    key={idx} 
                    to={link.url} 
                    activeClassName="active" 
                    exact={link.exact}
                    onClick={() => props.toggler(false)}
                    title={link.text}
                >
                    <span className="material-icons">{link.icon}</span>
                    <p className="text">{link.text}</p>
                </NavLink>
                ))
                } 
            </div>
        </div>
    );
}

export default RoutePanel;