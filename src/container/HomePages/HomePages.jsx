import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Commom/Header/Header';
import Footer from '../../components/Commom/Footer/Footer';
import NewArrival from '../../components/Home/NewArrival/NewArrival';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';
import DealOfTheWeek from '../../components/Home/DealOfTheWeek/DealOfTheWeek';

class HomePages extends PureComponent {
    render() {
        return (
            <div>

                <HeroBanner></HeroBanner>
                <NewArrival></NewArrival>
                <DealOfTheWeek></DealOfTheWeek>


            </div>
        );
    }
}

HomePages.propTypes = {

};

export default HomePages;