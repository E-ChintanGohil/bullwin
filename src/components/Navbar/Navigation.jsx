import React from 'react';
import { navItems } from '../../data/nav';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="sub-navbar">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a 
                href={item.path}
                className={`
                  ${item.highlight ? 'hightlight-menus' : ''}
                  ${item.className || ''}
                `}
              >
                {item.name}
                {item.isNew && <em>new</em>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation; 