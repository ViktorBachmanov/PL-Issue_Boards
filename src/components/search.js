import React from 'react';
//import { debounce } from '../utils'
import { TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


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
        <TextField
          placeholder='Search'
          onChange={this.handleChange}
          value={this.state.text}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
        />


        <Button variant="contained" onClick={this.handleSearch}>
          Search
        </Button>
      </div>
    );
  }
}
