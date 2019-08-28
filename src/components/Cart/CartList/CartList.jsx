import React, { PureComponent } from 'react';
// import "./css/style.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartItem from './../CartItem/CartItem';
import { removeItemInCart, updateCartItem } from "../../../actions/cartAction";
class CartList extends PureComponent {

    renderCartItemList = () => {
        const { cart } = this.props;
        if (cart.length > 0) {
            return cart.map((cart, index) => {
                return (
                    <CartItem key={index} product={cart.product} qty={cart.qty} 
                        removeCartItem={this.removeCartItem}  
                        handleIncrease={this.handleIncrease}
                        handleDecrease={this.handleDecrease}
                    />
                );
            });
        }
        return (
            <div className="h-100 row justify-content-center align-items-center">
                <h1 >Cart is empty</h1>

            </div>
        )
    }

    removeCartItem = (product) => {
        this.props.removeItemInCart(product);
    }

    totalPrice = () => {
        const { cart } = this.props;
        if (cart.length > 0) {
            return cart.reduce((preValue, item) => {
                return preValue + (item.product.salePrice * item.qty);
            }, 0);
        }
        return 0;
    }

    handleIncrease=(product,qty)=>{
        this.props.updateCartItem(product, qty);
    }
    handleDecrease = (product, qty) => {
        if (qty > 0) {
            this.props.updateCartItem(product, qty);
        }
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: "\n.quantity {\n    float: left;\n    margin-right: 15px;\n    background-color: #eee;\n    position: relative;\n    width: 80px;\n    overflow: hidden\n}\n\n.quantity input {\n    margin: 0;\n    text-align: center;\n    width: 15px;\n    height: 15px;\n    padding: 0;\n    float: right;\n    color: #000;\n    font-size: 20px;\n    border: 0;\n    outline: 0;\n    background-color: #F6F6F6\n}\n\n.quantity .qty {\n    position: relative;\n    border: 0;\n    width: 100%;\n    height: 40px;\n    padding: 10px 25px 10px 10px;\n    text-align: center;\n    font-weight: 400;\n    font-size: 15px;\n    border-radius: 0;\n    background-clip: padding-box\n}\n\n.quantity .cart_plus,\n.quantity .cart_minus {\n    line-height: 0;\n    background-clip: padding-box;\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    -webkit-background-size: 6px 30px;\n    -moz-background-size: 6px 30px;\n    color: #bbb;\n    font-size: 20px;\n    position: absolute;\n    height: 50%;\n    border: 0;\n    right: 0;\n    padding: 0;\n    width: 25px;\n    z-index: 3\n}\n\n.quantity .cart_plus:hover,\n.quantity .cart_minus:hover {\n    background-color: #dad8da\n}\n\n.quantity .cart_minus {\n    bottom: 0\n}\n\n.shopping-cart {\n    margin-top: 20px;\n}\n" }} />
                <div className="container single_product_container" style={{ marginTop: '190px' }}>
                    <div className="card shopping-cart">
                        <div className="card-body">
                            {this.renderCartItemList()}

                        </div>
                        <div className="card-footer">

                            <div className="pull-right" style={{ margin: '10px' }}>
                                <a className="btn btn-success pull-right" style={{ background: '#fe6164', borderColor: '#fe6164', color: '#fff' }}>Checkout</a>
                                <div className="pull-right" style={{ margin: '5px' }}>
                                    Total price: <b>${this.totalPrice()}</b>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        removeItemInCart,
        updateCartItem,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);