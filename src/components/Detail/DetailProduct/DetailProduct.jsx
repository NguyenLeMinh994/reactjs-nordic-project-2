import "./css/single_styles.css";
import "./css/single_responsive.css";
import "./js/single_custom.js";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import productApi from './../../../api/productApi';
import Thumbnail from './../Thumbnail/Thumbnail';
import { bindActionCreators } from "C:/Users/Minh/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";
import { addToCart } from './../../../actions/cartAction';
import { connect } from 'react-redux';

class DetailProduct extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            statusThumbnail: '',
            thumbnailList: [],
            qty:1,
        }
    }

    componentDidMount = async () => {
        try {
            const { match } = this.props;

            const idProduct = match.params.id;
            const product = await productApi.getDetail(idProduct);

            this.setState(() => {
                const thumbnailList = product.body.thumbnails;

                thumbnailList.unshift(product.body.thumbnail);
                return {
                    statusThumbnail: product.body.thumbnail,
                    product: product.body,
                    thumbnailList,
                }
            })
        } catch (error) {
            console.error(error);
        }

    }

    chooseThumbnail = (thumbnail) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                statusThumbnail: thumbnail,
            }
        });
    }
    handleIncrease=()=>{
        this.setState(prevState => {
            const qty = prevState.qty + 1;
            return {
                ...prevState,
                qty,
            }
        });
        
    }
    handleDecrease=()=>{
        this.setState(prevState => {
            if (prevState.qty > 1) {
                const qty = prevState.qty - 1;

                return {
                    ...prevState,
                    qty,
                }
            }
        });

    }
    renderthumbnails = () => {

        const { statusThumbnail, thumbnailList } = this.state;

        if (thumbnailList) {
            return thumbnailList.map((thumbnail, index) => {
                return <Thumbnail key={index} thumbnail={thumbnail} statusThumbnail={statusThumbnail} chooseThumbnail={this.chooseThumbnail} />
            });
        }
    }

    onAddToCart = (product,e) => {
        e.preventDefault();
        const { qty } = this.state;
        this.props.addToCart(product, qty)
    }
    render() {
        const { product, statusThumbnail,qty } = this.state;

        return (
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumbs d-flex flex-row align-items-center">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
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
                                                {this.renderthumbnails()}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 image_col order-lg-2 order-1">
                                        <div className="single_product_image">
                                            <div className="single_product_image_background" style={{ backgroundImage: `url(${ statusThumbnail })` }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="product_details">
                                <div className="product_details_title">
                                    <h2>{product.name}</h2>
                                    <p>{product.shortDescription}</p>
                                </div>

                                <div className="original_price">${product.originalPrice}</div>
                                <div className="product_price">${product.salePrice}</div>

                                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                    <span>Quantity:</span>
                                    <div className="quantity_selector">
                                        <span className="minus" onClick={this.handleDecrease}><i className="fa fa-minus" aria-hidden="true" /></span>
                                        <span id="quantity_value">{ qty }</span>
                                        <span className="plus" onClick={this.handleIncrease}><i className="fa fa-plus" aria-hidden="true" /></span>
                                    </div>
                                    <div className="red_button"
                                        style={{ width: '160px', marginLeft: '13px', fontSize: '12px' }}><a href="#" onClick={
                                            (e)=>this.onAddToCart(product,e)
                                        }>add to cart</a></div>
                                    <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
DetailProduct.propTypes = {
    match: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToCart
    }, dispatch);
}

export default connect(mapStateToProps,
    mapDispatchToProps)(DetailProduct);