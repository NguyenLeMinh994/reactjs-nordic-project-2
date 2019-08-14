import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class Product extends PureComponent {
    render() {
        const {product}=this.props;
        const linkElement = `./detail/${product.id}`;
        return (
            <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="favorite favorite_left" />

                    <div className="product_info">
                        <h6 className="product_name"><Link to={linkElement}>{product.name}</Link></h6>
                        <div className="product_price">${product.salePrice}<span>${product.originalPrice}</span></div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="">add to cart</a></div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;