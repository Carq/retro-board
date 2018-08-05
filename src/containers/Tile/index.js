import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import styled from 'styled-components';

const TileDiv = styled.div`
  background: #0073e6;
  border-radius: 5px;
  color: #f0f0f0;
  min-height: 25px;
  padding: 10px 15px;
  word-wrap: break-word;
`;

class Tile extends React.Component {
  state = {
    description: '',
    isEditing: true,
  };

  onClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  onChange = event => {
    this.setState({
      description: event.target.value,
    });
  };

  onLostFocus = () => {
    this.setState({
      isEditing: false,
    });
  };

  onKeyUp = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.setState({
        isEditing: false,
      });
    }
  };

  render() {
    let display = this.state.isEditing ? (
      <Input
        autoFocus
        type="text"
        value={this.state.description}
        onBlur={this.onLostFocus}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
      />
    ) : (
      this.state.description
    );

    return <TileDiv onClick={this.onClick}>{display}</TileDiv>;
  }
}

export default Tile;
