import React, { PureComponent } from 'react';
import Category from './../Category/Category';
import categoryApi from '../../../api/categoryApi';
import productApi from './../../../api/productApi';
import Product from './../Product/Product';

class NewArrival extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            statusCategory: '0',
            
        }
    }

    componentDidMount = async () => {
        try {
            const categories = await categoryApi.getAll();

            const categoryItems = categories.body;

            categoryItems.unshift({ id: '0', name: 'All' })
            const products = await productApi.getAll();

            this.setState(prevState => {
                return {
                    products: products.body,
                    categories: categoryItems,
                    loading:true,
                }
            });
        } catch (error) {
            console.error(error);
            
        } 
        
    }

    handleCategoryClick = async (category) => {
        try {
            let products = [];
            if (category.id === '0') {
                products = await productApi.getAll();
            } else if (category.id !== '0') {
                products = await categoryApi.getProductFromCategoryId(category);
            }
            // console.log("Product 2",products);

            this.setState(prevState => {
                return {
                    ...prevState,
                    products: products.body,
                    statusCategory: category.id,
                }
            });
        } catch (error) {
            console.log("Lấy dữ liệu thất bại");

        }
    }

    renderCategoryItems = () => {
        const { categories, statusCategory } = this.state;

        return categories.map((category) => {
            return (<Category key={category.id} category={category}
                statusCategory={statusCategory}
                handleCategory={this.handleCategoryClick} />);
        });
    }

  
    renderProductItems = () =>{
        const { products } = this.state;
        if (products.length>0){
            return products.map(product => {
                return <Product key={product.id} product={product} />;
            });
        }else{
            return (<h3>Loading ....</h3>);
        }
       

    }

   
    render() {
        return (
            <div>
                <div className="new_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section_title new_arrivals_title">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col text-center">
                                <div className="new_arrivals_sorting">
                                    <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                        {this.renderCategoryItems()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="product-grid" data-isotope="{ &quot;itemSelector&quot;: &quot;.product-item&quot;, &quot;layoutMode&quot;: &quot;fitRows&quot; }">
                                    {this.renderProductItems()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}


export default NewArrival;