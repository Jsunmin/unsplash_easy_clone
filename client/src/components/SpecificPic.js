import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SpecificPic.css';

class componentName extends Component {
    render() {
        const {id, author} = this.props.match.params
        return (
            <div className='aPic_box'>
              {}
              <img src={`https://picsum.photos/400/400?image=${id}`} alt=''/>
              <div className='text_box'>
                <Link to={`/${author}`} className='author_link'>
                  <h3>Author: {author}</h3>
                </Link>
                <Link to='/'>
                  <h3>Back</h3>
                </Link>
              </div>
            </div>
        );
    }
}

export default componentName;