import React from 'react';
//import { debounce } from '../utils'

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSearch() {
    this.props.dispatch({
      type: 'filter/set',
      payload: this.state.text,
    });
  }

  render() {
    return (
      <div>
        <input placeholder="Search" className="search_theme-1" onChange={this.handleChange} value={this.state.text} />

        <button className="button button_blue" onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}
