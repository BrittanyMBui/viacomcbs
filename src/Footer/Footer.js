import React, {Component} from 'react';
import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <a href="https://www.viacomcbsprivacy.com/policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://www.viacomcbsprivacy.com/cookies">Cookies Policy</a>
                    </li>
                    <li>
                        <a href="https://www.viacomcbsprivacy.com/donotsell">Do Not Sell My Personal Information</a>
                    </li>
                    <li>
                        <span className="copyright">© 2021</span>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;