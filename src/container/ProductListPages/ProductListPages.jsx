import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../components/ProductList/ProductList/ProductList';

class ProductListPages extends PureComponent {
    render() {
        return (
           <ProductList />
        );
    }
}

ProductListPages.propTypes = {

};

export default ProductListPages;