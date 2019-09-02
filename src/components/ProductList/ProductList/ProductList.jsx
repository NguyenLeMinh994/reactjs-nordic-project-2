import React, { PureComponent } from 'react';
import './css/categories_responsive.css';
import './css/categories_styles.css';
import productApi from './../../../api/productApi';
import Product from '../Product/Product';
import Pagination from '../Pagination/Pagination';
import qs from 'query-string';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'


class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            order: {
                orderName: 'Default Sorting',
                orderSort: ''
            },
            skip: 0,
            limit: 8,
            currentPage: 1,
            totalPages: 1,
            rangePrice:{
                min:0,
                max:100
            },
        }
       
        
    }

    async componentDidMount() {

        try {

            const { location}=this.props;
            const queryParams=qs.parse(location.search);

            if (Object.keys(queryParams).length !== 0)
            {
                
                const params = {
                    filter: JSON.stringify(queryParams),
                };
                
                const { body, pagination } = await productApi.getAll(params);
                
                const totalPages = Math.ceil(pagination.total / pagination.limit);

                this.setState({
                    productList: body,
                    totalPages,
                })
            }
            else{

                const { limit, order } = this.state;
                const filter = {
                    limit,
                    order: order.orderSort,
                };
                const params = {
                    filter: JSON.stringify(filter),
                };
                const { body, pagination } = await productApi.getAll(params);
                const totalPages = Math.ceil(pagination.total / limit);

                this.setState({
                    productList: body,
                    totalPages,
                })
            }

        } catch (error) {

        }

    }

    renderProductList = () => {
        const { productList } = this.state;
        if (productList.length > 0) {
            return productList.map((product) => {
                return <Product key={product.id} product={product} />
            });
        }
        else {
            return (<h3>Loading ...</h3>);
        }
    }

    renderPagination = () => {
        const { totalPages, currentPage } = this.state;

        return (
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                choosePage={this.choosePage}
            ></Pagination>
        );

    }

    showProduct = async (limitNumber) => {
        try {
            const { history } = this.props;

            const { order } = this.state;

            const filter = {
                limit: limitNumber,
                order: order.orderSort,
                skip: 0
            };
            const params = {
                filter: JSON.stringify(filter),
            };
            const { body, pagination } = await productApi.getAll(params);
            const totalPages = Math.ceil(pagination.total / limitNumber);
            this.setState({
                productList: body,
                limit: limitNumber,
                totalPages,
                currentPage: 1,
            })
            const queryParams = {
                ...filter,
                page: 1,
            }
            history.push({
                search: qs.stringify(queryParams),
            })
        } catch (error) {

        }
    }

    handleChangeOption = async (chooseOption) => {
        try {
            let orderSort;
            switch (chooseOption) {
                case "Price From Low To High":
                    orderSort = 'salePrice desc';
                    break;
                case "Price From High To Low":
                    orderSort = 'salePrice asc';
                    break;
                case "Name From A To Z":
                    orderSort = 'name desc';
                    break;
                case "Name From Z To A":
                    orderSort = 'name asc';
                    break;

                default:
                    orderSort = '';
                    break;
            }
            
            const { history} = this.props;
            
            const { limit } = this.state;

            const filter = {
                limit,
                order: orderSort,
                skip:0
            };
            const params = {
                filter: JSON.stringify(filter),
            };
            const { body, pagination } = await productApi.getAll(params);
            const totalPages = Math.ceil(pagination.total / limit);
            this.setState(prevState => {
                const newOrder = {
                    ...prevState.order,
                    orderName: chooseOption,
                    orderSort,
                }
                return {
                    order: newOrder,
                    productList: body,
                    currentPage: 1,
                    totalPages,

                }
            })
            const queryParams = {
                ...filter,
                page:1,
            }
            history.push({
                search: qs.stringify(queryParams),
            })
        } catch (error) {

        }

    }

    choosePage = async (page) => {
        
        try {
            const { history } = this.props;
            const { limit, order } = this.state;
            const skip = (page - 1) * limit;
            const filter = {
                limit,
                order: order.orderSort,
                skip,
            };
            const params = {
                filter: JSON.stringify(filter),
            };
            const { body } = await productApi.getAll(params);
         

            this.setState(prevState => {
                return {
                    currentPage: page,
                    productList: body
                }
            });
            const queryParams={
                ...filter,
                page,
            }
            
            history.push({
                search: qs.stringify(queryParams),
            })
        } catch (error) {

        }
    }
    handleRangePrice=(value)=>{
        this.setState(prevState=>{
            console.log(prevState.rangePrice);
            
            const newRangePrice={
                ...value
            }
            return{
                rangePrice: newRangePrice,  
            }
        })
        
    }

    render() {
        const { order, limit, totalPages, rangePrice } = this.state;

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
                                    <div id="amount">
                                        ${rangePrice.min} - ${rangePrice.max}
                                    </div>
                                    <div id="slider-range" style={{marginTop:"20px"}}>
                                        <InputRange
                                            maxValue={1000}
                                            minValue={0}
                                            formatLabel={value => `$ ${value}`}
                                            value={rangePrice}
                                            onChange={(value) => this.handleRangePrice(value)}
                                        />
                                    </div>
                                           
                                        
                                        
                                    <div className="filter_button"><span>filter</span></div>
                                </div>
                            </div>
                            <div className="main_content">
                                <div className="products_iso">
                                    <div className="row">
                                        <div className="col">
                                            <div className="product_sorting_container product_sorting_container_top">
                                                <ul className="product_sorting">
                                                    <li style={{ width: "200px" }}>
                                                        <span className="type_sorting_text">{order.orderName}</span>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="sorting_type">
                                                            <li className="type_sorting_btn" onClick={() => this.handleChangeOption('Default Sorting')}><span>Default Sorting</span></li>
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
                                                    {this.renderPagination()}
                                                    <div className="page_total"><span>of</span> {totalPages} </div>
                                                </div>
                                            </div>
                                            <div className="product-grid">
                                                {this.renderProductList()}
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