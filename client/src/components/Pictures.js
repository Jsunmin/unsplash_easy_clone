import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Pictures.css';

class PicturePage extends Component {
    render() {
        const { picData, picId} = this.props;
        return (
            <Link to={`/SpecificPic/${picId}/${picData.author}`} className='picLink'>
              <div className='pic_box'>
                <img src={`https://picsum.photos/250/250?image=${picId}`} alt=''/>
                <span className='text_author'>{picData.author}</span>
              </div>
            </Link>    
        );
    }
}

export default PicturePage;