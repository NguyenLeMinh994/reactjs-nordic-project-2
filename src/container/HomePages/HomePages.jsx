import React, { PureComponent } from 'react';

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

export default HomePages;