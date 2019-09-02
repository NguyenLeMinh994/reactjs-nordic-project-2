import React, { PureComponent } from 'react';

class Pagination extends PureComponent {
    
    renderItemPages=()=>{
        const { totalPages, choosePage}=this.props;
        const pageElements=[];
        for (let index = 1; index <= totalPages; index++) {
            pageElements.push(<li key={index}><a href="#!" onClick={() => choosePage(index)}>{index}</a></li>);
            
        }
        return pageElements;
    }
    render() {
        const { currentPage } = this.props;
        return (
            <div className="page_current">
                <span> {currentPage} </span>
                <ul className="page_selection">
                    {this.renderItemPages()}
                </ul>
            </div>
        );
    }
}



export default Pagination;