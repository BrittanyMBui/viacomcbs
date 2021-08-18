import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';


class Layout extends Component {
    render() {
        return(
            <>
                <Header/>
                    <main>{this.props.children}</main>
                <Footer/>
            </>
        )
    }
}

export default Layout;
