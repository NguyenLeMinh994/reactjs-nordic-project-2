import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Category extends PureComponent {
    constructor(props) {
        super(props);

    };



    render() {
        const { category, statusCategory, handleCategory } = this.props;

        const classHTML = `grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${ statusCategory === category.id ? 'active' : '' }`;

        return (
            <li className={classHTML} onClick={() => handleCategory(category)}>{category.name}</li>
        );
    }
}

Category.propTypes = {

};




export default Category;