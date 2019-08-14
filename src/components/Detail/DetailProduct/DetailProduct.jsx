import "./css/single_styles.css";
import "./css/single_responsive.css";
import "./js/single_custom.js";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import productApi from './../../../api/productApi';

class DetailProduct extends PureComponent {

    constructor(props) {
        super(props);
        this.state={
            product:{},
            statusImage:'',
        }
    }

    componentDidMount = async()=> {
        try {
            const { match } = this.props;
            console.log(match);
            
            const idProduct = match.params.id;
            const product = await productApi.getDetail(idProduct);

            this.setState(()=>{
                
                return {
                    product: product.body,
                }
            })
        } catch (error) {
            console.error(error);
        }
        
    }
    render() {
        const {product}=this.state;
        console.log(product);
        
        return (
            <div>
                <div className="container single_product_container">
                    <div className="row">
                        <div className="col">
                            {/* Breadcrumbs */}
                            <div className="breadcrumbs d-flex flex-row align-items-center">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="categories.html"><i className="fa fa-angle-right" aria-hidden="true" />Men's</a></li>
                                    <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Single Product</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="single_product_pics">
                                <div className="row">
                                    <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                        <div className="single_product_thumbnails">
                                            <ul>
                                                <li><img src="images/single_1_thumb.jpg" alt="" data-image="images/single_1.jpg" /></li>
                                                <li className="active"><img src="images/single_2_thumb.jpg" alt="" data-image="images/single_2.jpg" /></li>
                                                <li><img src="images/single_3_thumb.jpg" alt="" data-image="images/single_3.jpg" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 image_col order-lg-2 order-1">
                                        <div className="single_product_image">
                                            <div className="single_product_image_background" style={{ backgroundImage: 'url(images/single_2.jpg)' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="product_details">
                                <div className="product_details_title">
                                    <h2>Pocket cotton sweatshirt</h2>
                                    <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                                </div>
                                
                                <div className="original_price">$629.99</div>
                                <div className="product_price">$495.00</div>
                                
                                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                    <span>Quantity:</span>
                                    <div className="quantity_selector">
                                        <span className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                                        <span id="quantity_value">1</span>
                                        <span className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
                                    </div>
                                    <div className="red_button" 
                                        style={{ width: '160px', marginLeft: '13px', fontSize: '12px' }}><a href="#">add to cart</a></div>
                                    <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        );
    }
}
DetailProduct.propTypes={
    match: PropTypes.object.isRequired,
}



export default DetailProduct;