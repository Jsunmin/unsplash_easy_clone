import React, { Component } from 'react';
import { PulseLoader } from 'react-loaders-spinners';

class Spinner extends Component {
    render() {
        return (
          <div style={{ width: '500px' }}>
            <PulseLoader 
            width={500}
            rows={8}
            lineHeight={28}
            />
          </div>
        );
    }
}

export default Spinner;