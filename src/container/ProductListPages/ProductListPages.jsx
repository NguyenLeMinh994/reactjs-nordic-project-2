import React, { PureComponent } from 'react';
import ProductList from '../../components/ProductList/ProductList/ProductList';

class ProductListPages extends PureComponent {
    render() {
        const {history,location}=this.props;
        // console.log(history, location);
        
        return (
           <ProductList history={history} location={location} />
        );
    }
}
export default ProductListPages;