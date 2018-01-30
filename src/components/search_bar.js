import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div className='search-bar'>
        <input 
        value={this.state.term} 
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange = (term) => {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
