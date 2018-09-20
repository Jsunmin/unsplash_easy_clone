import React, { Component } from 'react';

import axios from 'axios';

import Pictures from './Pictures.js';
import Spinner from './Spinner.js';
import './Main.css';

class MainPage extends Component {
    state = {
        data: []
    }

    componentDidMount() {
      console.log(this.props.match.params.author,'qwdqwdqwd')
      if (this.props.match.params.author) {
        axios.get(`http://127.0.0.1:5050/filteredPictures/${this.props.match.params.author}`)
          .then(res => { 
            this.setState({
              data: res.data
            })
            console.log(this.state, 'state~~');
          })
          .catch(err => { throw new Error(err) });
      } else {
          console.log('???????')
        //axios.get('http://localhost:3000/collection') json-server
        axios.get('http://127.0.0.1:5050/allPictures')
          .then(res => { 
            this.setState({
              data: res.data
            })
            console.log(this.state, 'state~~')
          })
          .catch(err => { throw new Error(err) });
      }
    }

    render() {
        const { data } = this.state;
        
        return (
            <div>
              <h1 className='title1'>IM07 Pictures</h1>
              <h3 className='title2'>{data.length} free random pictures</h3>  
              <h3 className='title2'>find what u want!</h3>
              <div className='picture_box'>{ !data.length ? <Spinner/> :
                data.map((data, i) => <Pictures picData={data} key={i} picId={data.id}/>)}</div>
            </div>
        );
    }
}

export default MainPage;