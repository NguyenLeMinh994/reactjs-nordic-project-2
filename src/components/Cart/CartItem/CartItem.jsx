import React, { PureComponent } from 'react';

class CartItem extends PureComponent {

    render() {
        const { product, qty, removeCartItem, handleIncrease, handleDecrease } = this.props;
        
        return (
            <div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src={product.image} alt="prewiew"
                        width={120} height={80} />
                </div>
                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                    <h4 className="product-name"><strong>{product.name}</strong></h4>
                    <h4>
                        <small>{product.shortDescription}</small>
                    </h4>
                </div>
                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                    <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '12px' }}>
                        <h6><strong>{product.salePrice * qty} <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity" style={{ marginTop: '0px'}}>
                                <input type="button" value="+" className="cart_plus" onClick={() => handleIncrease(product,qty + 1)} />
                                <p className="qty" style={{marginRight:'45px' }}> {qty} </p>
                                <input type="button" value="-" className="cart_minus" onClick={() => handleDecrease(product, qty - 1)} />
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                            <button type="button" className="btn btn-outline-danger btn-xs" onClick={() => removeCartItem(product)}>
                            <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div> <hr />
            </div>
        );
    }
}



export default CartItem;