import React, { PureComponent } from 'react';

import DetailProduct from '../../components/Detail/DetailProduct/DetailProduct';

class DetailPages extends PureComponent {
    render() {
        const {match}=this.props
        return (
            <DetailProduct match={match}/>
        );
    }
}



export default DetailPages;