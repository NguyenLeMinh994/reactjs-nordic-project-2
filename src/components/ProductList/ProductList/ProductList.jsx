import React, { PureComponent } from 'react';
import './css/categories_styles.css';
import './css/categories_responsive.css';
import productApi from './../../../api/productApi';
import Product from '../Product/Product';
import { async } from 'q';

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            productList:[],
            order:{
                orderName:'Default Sorting',
                orderSort:''
            },
            skip:0,
            limit:4,
        }
    }

    async componentDidMount() {

        const product = await productApi.getAll();
        this.setState({
            productList: product.body,
        })
    }

    renderProductList=()=>{
        const {productList} =this.state;
        if (productList.length>0)
        {
            return productList.map((product)=>{
                return <Product key={product.id} product={product} />
            });
        }
        else{
            return (<h3>Loading ...</h3>);
        }
    }
    showProduct= async (limitNumber)=>{
       
        
        try {
            const { order, skip } = this.state;

            const filter = {
                limit: limitNumber,
                skip,
                order: order.orderSort,
            };
            const params = {
                filter: JSON.stringify(filter),
            };
            const product = await productApi.getAll(params);
            console.log(product);
            
            this.setState({
                productList: product.body,
                limit: limitNumber
            })
        } catch (error) {
            
        }
    }
    handleChangeOption = async (chooseOption) => {
        try {
            let orderSort;
            switch (chooseOption) {
                case "Price From Low To High":
                    orderSort ='salePrice desc';
                    break;
                case "Price From High To Low":
                    orderSort = 'salePrice asc';
                    break;
                case "Name From A To Z":
                    orderSort ='name desc';
                    break;
                case "Name From Z To A":
                    orderSort = 'name asc';
                    break;
            
                default:
                    orderSort = '';
                    break;
            }
            const {skip, limit } = this.state;
            
            const filter = {
                limit,
                skip,
                order: orderSort,
            };
            const params = {
                filter: JSON.stringify(filter),
            };
            const product = await productApi.getAll(params);
            
            this.setState(prevState => {
                const newOrder = {
                    ...prevState.order,
                    orderName: chooseOption,
                    orderSort,
                }
                return {
                    order: newOrder,
                    productList: product.body,
                }
            })
            
        } catch (error) {
            
        }
        
    }


    render() {
        const { order,limit }=this.state;
        
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
                                                    <li style={{width:"200px"}}>
                                                        <span className="type_sorting_text">{order.orderName}</span>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="sorting_type">
                                                            <li className="type_sorting_btn" onClick={() =>this.handleChangeOption('Default Sorting')}><span>Default Sorting</span></li>
                                                            <li className="type_sorting_btn" onClick={() => this.handleChangeOption('Price From Low To High')}><span>Price From Low To High</span></li>
                                                            <li className="type_sorting_btn" onClick={() => this.handleChangeOption('Price From High To Low')}><span>Price From High To Low</span></li>
                                                            <li className="type_sorting_btn" onClick={() => this.handleChangeOption('Name From A To Z')}><span>Name From A To Z</span></li>
                                                            <li className="type_sorting_btn" onClick={() => this.handleChangeOption('Name From Z To A')}><span>Name From Z To A</span></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span>Show</span>
                                                        <span className="num_sorting_text">{limit}</span>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="sorting_num">
                                                            <li className="num_sorting_btn" ><span onClick={() => this.showProduct(4)}>4</span></li>
                                                            <li className="num_sorting_btn" ><span onClick={() => this.showProduct(8)}>8</span></li>
                                                            <li className="num_sorting_btn" ><span onClick={() => this.showProduct(12)}>12</span></li>
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
                                                    
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                {this.renderProductList()}
                                            </div>
                                            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                               
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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