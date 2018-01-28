import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCrxaj2bzdJQ-44FdAjZzTUygCTNLfYNM0';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'climbing'}, videos => { this.setState({ videos }); console.log(videos, 'videos from YTSearch');});
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail videos={this.state.videos}/>
        <VideoList videos={this.state.videos}/>
      </div>
    ) 
  }
  
}
ReactDOM.render(<App />, document.querySelector('.container'));

