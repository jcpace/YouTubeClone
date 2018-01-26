import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCrxaj2bzdJQ-44FdAjZzTUygCTNLfYNM0';
YTSearch({
  key: API_KEY,
  term: 'climbing'
}, data => { console.log(data);});

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    ) 
  }
  
}
ReactDOM.render(<App />, document.querySelector('.container'));

