import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePages from './../HomePages/HomePages';
import Header from './../../components/Commom/Header/Header';
import Footer from './../../components/Commom/Footer/Footer';
import DetailPages from './../DetailPages/DetailPages';


class Pages extends PureComponent {
    render() {
        return (

            <Router>
                <div className="super_container">
                    <Header></Header>
                    <Switch>
                        <Route exact path="/" component={HomePages}></Route>
                        <Route exact path="/detail/:id" component={DetailPages}></Route>
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>

        );
    }
}



export default Pages;