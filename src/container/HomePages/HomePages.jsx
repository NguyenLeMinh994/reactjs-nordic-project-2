import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Commom/Header/Header';
import Footer from '../../components/Commom/Footer/Footer';
import NewArrival from '../../components/Home/NewArrival/NewArrival';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';

class HomePages extends PureComponent {
    render() {
        return (
            <div className="super_container">
                <Header></Header>
                <HeroBanner></HeroBanner>
                <NewArrival></NewArrival>
                {/* <Footer></Footer> */}

            </div>
        );
    }
}

HomePages.propTypes = {

};

export default HomePages;