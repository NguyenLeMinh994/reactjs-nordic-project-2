import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './css/categories_styles.css';
import './css/categories_responsive.css';
class ProductList extends PureComponent {
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
                                                <div className="product-item men">
                                                    <div className="product discount product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_1.png" alt="" />
                                                        </div>
                                                        <div className="favorite favorite_left" />
                                                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                                                            <div className="product_price">$520.00<span>$590.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button" style={{ margin: '0' }}><a href="#">add to cart</a></div>
                                                </div>
                                                <div className="product-item women">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_2.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                                                            <div className="product_price">$610.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 3 */}
                                                <div className="product-item women">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_3.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
                                                            <div className="product_price">$120.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 4 */}
                                                <div className="product-item accessories">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_4.png" alt="" />
                                                        </div>
                                                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                                                        <div className="favorite favorite_left" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                                                            <div className="product_price">$410.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 5 */}
                                                <div className="product-item women men">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_5.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold &amp; Grey</a></h6>
                                                            <div className="product_price">$180.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 6 */}
                                                <div className="product-item accessories">
                                                    <div className="product discount product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_6.png" alt="" />
                                                        </div>
                                                        <div className="favorite favorite_left" />
                                                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                                                            <div className="product_price">$520.00<span>$590.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 7 */}
                                                <div className="product-item women">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_7.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                                                            <div className="product_price">$610.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 8 */}
                                                <div className="product-item accessories">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_8.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Blue Yeti USB Microphone Blackout Edition</a></h6>
                                                            <div className="product_price">$120.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 9 */}
                                                <div className="product-item men">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_9.png" alt="" />
                                                        </div>
                                                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                                                        <div className="favorite favorite_left" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                                                            <div className="product_price">$410.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 10 */}
                                                <div className="product-item men">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_10.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold &amp; Grey</a></h6>
                                                            <div className="product_price">$180.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 11 */}
                                                <div className="product-item women men">
                                                    <div className="product product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_5.png" alt="" />
                                                        </div>
                                                        <div className="favorite" />
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Pryma Headphones, Rose Gold &amp; Grey</a></h6>
                                                            <div className="product_price">$180.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
                                                {/* Product 12 */}
                                                <div className="product-item accessories">
                                                    <div className="product discount product_filter">
                                                        <div className="product_image">
                                                            <img src="images/product_6.png" alt="" />
                                                        </div>
                                                        <div className="favorite favorite_left" />
                                                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                                        <div className="product_info">
                                                            <h6 className="product_name"><a href="single.html">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                                                            <div className="product_price">$520.00<span>$590.00</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                                </div>
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

ProductList.propTypes = {

};

export default ProductList;