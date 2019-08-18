import React, { PureComponent } from 'react';
import './css/categories_styles.css';
import './css/categories_responsive.css';
import productApi from './../../../api/productApi';
import Product from '../Product/Product';

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            productList:[],
        }
    }

    async componentDidMount() {

        const productList = await productApi.getAll();
        this.setState({
            productList: productList.body,
        })
    }

    renderProductList=()=>{
        const {productList} =this.state;
        if (productList)
        {
            console.log(productList);
            
            return productList.map((product)=>{
                return <Product key={product.id} product={product} />
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col product_section clearfix">
                            <div className="breadcrumbs d-flex flex-row align-items-center">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true" />Men's</a></li>
                                </ul>
                            </div>
                            <div className="sidebar">

                                <div className="sidebar_section">
                                    <div className="sidebar_title">
                                        <h5>Filter by Price</h5>
                                    </div>
                                    <p>
                                        <input type="text" id="amount" readOnly style={{ border: 0, color: '#f6931f', fontWeight: 'bold' }} />
                                    </p>
                                    <div id="slider-range" />
                                    <div className="filter_button"><span>filter</span></div>
                                </div>
                            </div>
                            <div className="main_content">
                                <div className="products_iso">
                                    <div className="row">
                                        <div className="col">
                                            <div className="product_sorting_container product_sorting_container_top">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <span className="type_sorting_text">Default Sorting</span>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="sorting_type">
                                                            <li className="type_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>Default Sorting</span></li>
                                                            <li className="type_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }"><span>Price</span></li>
                                                            <li className="type_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>Product Name</span></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span>Show</span>
                                                        <span className="num_sorting_text">6</span>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="sorting_num">
                                                            <li className="num_sorting_btn"><span>6</span></li>
                                                            <li className="num_sorting_btn"><span>12</span></li>
                                                            <li className="num_sorting_btn"><span>24</span></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <div className="pages d-flex flex-row align-items-center">
                                                    <div className="page_current">
                                                        <span>1</span>
                                                        <ul className="page_selection">
                                                            <li><a href="#">1</a></li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="page_total"><span>of</span> 3</div>
                                                    <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                {/*  */}
                                                {this.renderProductList()}
                                            </div>
                                            {/* Product Sorting */}
                                            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                                <ul className="product_sorting">
                                                    <li>
                                                        <span>Show:</span>
                                                        <span className="num_sorting_text">04</span>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="sorting_num">
                                                            <li className="num_sorting_btn"><span>01</span></li>
                                                            <li className="num_sorting_btn"><span>02</span></li>
                                                            <li className="num_sorting_btn"><span>03</span></li>
                                                            <li className="num_sorting_btn"><span>04</span></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <span className="showing_results">Showing 1–3 of 12 results</span>
                                                <div className="pages d-flex flex-row align-items-center">
                                                    <div className="page_current">
                                                        <span>1</span>
                                                        <ul className="page_selection">
                                                            <li><a href="#">1</a></li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="page_total"><span>of</span> 3</div>
                                                    <div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Benefit */}
                <div className="benefit">
                    <div className="container">
                        <div className="row benefit_row">
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true" /></div>
                                    <div className="benefit_content">
                                        <h6>free shipping</h6>
                                        <p>Suffered Alteration in Some Form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true" /></div>
                                    <div className="benefit_content">
                                        <h6>cach on delivery</h6>
                                        <p>The Internet Tend To Repeat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true" /></div>
                                    <div className="benefit_content">
                                        <h6>45 days return</h6>
                                        <p>Making it Look Like Readable</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true" /></div>
                                    <div className="benefit_content">
                                        <h6>opening all week</h6>
                                        <p>8AM - 09PM</p>
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



export default ProductList;