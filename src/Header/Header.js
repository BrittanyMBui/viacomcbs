import React, {Component} from 'react';
import logo from '../img/viacomcbsstreaminglogo.png';
import './Header.css';

class Header extends Component {

    render(){
        return (
            <header>
                <nav className="navbar shadow-sm navbar-expand-md navbar-light mb-2">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="ViacomCBS Streaming" className="img-responsive"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                        
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Menu1</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Menu2</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Menu3</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Menu4</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;