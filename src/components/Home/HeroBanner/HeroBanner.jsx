import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class HeroBanner extends PureComponent {
    render() {
        return (
            <div>
                <div className="main_slider" style={{ backgroundImage: 'url(vendor/images/slider_1.jpg)' }}>
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h6>Spring / Summer Collection 2017</h6>
                                    <h1>Get up to 30% Off New Arrivals</h1>
                                    <div className="red_button shop_now_button"><a href="#">shop now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="banner_item align-items-center" style={{ backgroundImage: 'url(vendor/images/banner_1.jpg)' }}>
                                    <div className="banner_category">
                                        <a href="categories.html">women's</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="banner_item align-items-center" style={{ backgroundImage: 'url(vendor/images/banner_2.jpg)' }}>
                                    <div className="banner_category">
                                        <a href="categories.html">accessories's</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="banner_item align-items-center" style={{ backgroundImage: 'url(vendor/images/banner_3.jpg)' }}>
                                    <div className="banner_category">
                                        <a href="categories.html">men's</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

HeroBanner.propTypes = {

};

export default HeroBanner;