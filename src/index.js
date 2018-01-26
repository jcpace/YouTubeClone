import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCrxaj2bzdJQ-44FdAjZzTUygCTNLfYNM0';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'climbing'}, videos => { this.setState({ videos }); console.log(videos);});
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    ) 
  }
  
}
ReactDOM.render(<App />, document.querySelector('.container'));

