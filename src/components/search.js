import React from 'react';
//import { debounce } from '../utils'
import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { set as filterSetAction } from '../features/filter/filterSlice';
import { connect } from 'react-redux';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
/*
  handleSearch() {
    this.props.dispatch({
      type: 'filter/set',
      payload: this.state.text,
    });
  }*/
  handleSearch() {
    this.props.filterSetAction(this.state.text);
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  }

  render() {
    return (
      <div className="search-bar search-bar_theme-1">
        <TextField
          placeholder="Search"
          size="small"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.text}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ marginRight: '8px' }}
        />

        <Button variant="contained" onClick={this.handleSearch}>
          Search
        </Button>
      </div>
    );
  }
}


export default connect(null, { filterSetAction })(Search);