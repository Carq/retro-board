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
    id: this.props.tileData.id || 0,
    name: this.props.tileData.name || '',
    isEditing: this.props.tileData.isEditing,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tileData !== this.props.tileData) {
      this.setState({
        id: this.props.tileData.id,
        name: this.props.tileData.name,
      });
    }
  }

  onClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  onChange = event => {
    this.setState({
      name: event.target.value,
      isEditing: this.state.isEditing,
    });
  };

  onLostFocus = () => {
    this.finishEditing();
  };

  onKeyUp = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.finishEditing();
    }
  };

  finishEditing = () => {
    this.setState({
      isEditing: false,
    });

    this.props.onEditionCompleted({
      id: this.props.tileData.id,
      name: this.state.name,
      order: this.props.tileData.order,
    });
  };

  render() {
    let display = this.state.isEditing ? (
      <Input
        autoFocus
        type="text"
        value={this.state.name}
        onBlur={this.onLostFocus}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
      />
    ) : (
      this.state.name
    );

    return <TileDiv onClick={this.onClick}>{display}</TileDiv>;
  }
}

Tile.propTypes = {
  tileData: PropTypes.object,
  onEditionCompleted: PropTypes.func,
};

export default Tile;
