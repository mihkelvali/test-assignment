import React, {Component} from 'react';
import './styles.css';
import logo from '../../icons/mc-logo.png';

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
