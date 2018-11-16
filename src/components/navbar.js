import React, {Component} from 'react';
import './navbar.css';
import logo from '../icons/mc-logo.png';

class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <img src={logo} alt='logo'/>
            </div>
        );
    }
}

export default Navbar;
