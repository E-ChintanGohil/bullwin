import React from 'react';
import './Header.css';
import logo from '../../assets/img/image.png'; // Make sure to add your logo image

function Header() {
  return (
    <div id="mainNav" className="navbar-custom">
      <div className="container-fluid">
        {/* Logo on the left */}
        <div className="logo-box">
          <a href="/" className="logo logo-light">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
        </div>

        {/* Right side content */}
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <li className="dropdown">
            <form className="userloginform d-flex align-items-center">
              <i className="mdi mdi-account"></i>
              <input 
                type="text" 
                placeholder="Username" 
                className="form-control"
              />
              <input 
                type="password" 
                placeholder="Passsword" 
                className="form-control"
              />
              <button type="submit" className="btn btnlogin">
                Login <i className="mdi mdi-arrow-right"></i>
              </button>
              <button type="button" className="btn btnlogin">
                Login With Demo ID <i className="mdi mdi-arrow-right"></i>
              </button>
              <a href="#/signup" className="btn-signup">Signup</a>
            <button type="button" className="btn-forgot">Forgot?</button>
            </form>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header; 