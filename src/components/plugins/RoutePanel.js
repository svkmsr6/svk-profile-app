import React from 'react';
import { NavLink } from 'react-router-dom';
import './RoutePanel.css';

function RoutePanel(props) {
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