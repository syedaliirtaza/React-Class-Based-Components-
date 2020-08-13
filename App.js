import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';

class App extends Component {
  constructor(porps) {
    super(porps);

    this.state = {
      name: ''
    }
  }
    
  onInputChange = (value) => {
    this.setState({ name: value });
  }

  render() {
    return(
      <div>
        <h1>wELCOME TO React</h1>
        <input 
          placeholder="what's your name"
          value={ this.state.name }  
          onChange={ (event) => this.onInputChange(event.target.value) }
        />
        <Comment 
          author={ { name: this.state.name , avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} }
          text="hi, thanks for listening"
        />
      </div>  
    );
  }
    
}

export default App;
