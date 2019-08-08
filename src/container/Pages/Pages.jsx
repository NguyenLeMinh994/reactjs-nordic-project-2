import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from './../HomePages/HomePages';
import CartPages from './../CartPages/CartPages';
import Header from './../../components/Commom/Header/Header';
import Footer from './../../components/Commom/Footer/Footer';

class Pages extends PureComponent {
    render() {
        return (

            <Router>
                <div className="super_container">
                    <Header></Header>
                    
                    <Switch>
                        <Route exact path="/" component={HomePages}></Route>
                        <Route path="/cart" component={CartPages}></Route>
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>

        );
    }
}

Pages.propTypes = {

};

export default Pages;