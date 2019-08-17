import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Thumbnail extends PureComponent {
    render() {
        const { thumbnail, statusThumbnail, chooseThumbnail}= this.props;
        return (
            <li className={thumbnail === statusThumbnail ? 'active' : ''} onClick={() => chooseThumbnail(thumbnail)} ><img src={thumbnail} data-image={thumbnail}  /></li>
        );
    }
}

Thumbnail.propTypes = {

};

export default Thumbnail;