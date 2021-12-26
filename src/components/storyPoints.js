import React from 'react';

export default class StoryPoints extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: props.initialValue,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let inputVal = e.target.value;

    if (inputVal < 1) {
      inputVal = 1;
    } else if (inputVal > 10) {
      inputVal = 10;
    }

    this.setState({
      val: inputVal,
    });
  }

  render() {
    return (
      <input
        type="number"
        value={this.state.val}
        className="story-points-input"
        onChange={this.handleChange}
        onFocus={(e) => {
          e.target.select();
        }}
        id="story_points"
      />
    );
  }
}
