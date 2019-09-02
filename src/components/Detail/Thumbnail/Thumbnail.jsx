import React, { PureComponent } from 'react';

class Thumbnail extends PureComponent {
    render() {
        const { thumbnail, statusThumbnail, chooseThumbnail}= this.props;
        return (
            <li className={thumbnail === statusThumbnail ? 'active' : ''} onClick={() => chooseThumbnail(thumbnail)} ><img src={thumbnail} alt={thumbnail} data-image={thumbnail}  /></li>
        );
    }
}


export default Thumbnail;