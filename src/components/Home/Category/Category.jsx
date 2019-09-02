import React, { PureComponent } from 'react';

class Category extends PureComponent {

    render() {
        const { category, statusCategory, handleCategory } = this.props;

        const classHTML = `grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${ statusCategory === category.id ? 'active' : '' }`;

        return (
            <li className={classHTML} onClick={() => handleCategory(category)}>{category.name}</li>
        );
    }
}


export default Category;