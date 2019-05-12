import ColumnHeader from './ColumnHeader';
import PlusButton from './PlusButton';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tile from 'containers/Tile';
import config from 'app/config';
import io from 'socket.io-client';

const ColumnDiv = styled.div`
  flex: 1;
  min-height: 500px;
  min-width: 200px;
  padding: 5px;
`;

const ItemDiv = styled.div`
  margin-bottom: 6px;
`;

class Column extends React.Component {
  state = {
    tiles: [],
  };

  socket = io(config.api.URL);

  componentDidMount() {
    this.fetchTiles();
    this.initializeSocket();
  }

  fetchTiles() {
    fetch(config.api.URL + `/api/tiles/${this.props.columnId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ tiles: [...data] });
      });
  }

  initializeSocket() {
    this.socket.on('tileAdded', () => {
      this.fetchTiles();
    });
  }

  addNewEmptyTile = () => {
    this.setState({
      tiles: [
        ...this.state.tiles,
        { order: this.state.tiles.length + 1, isEditing: true },
      ],
    });
  };

  tileEditionCompleted = tileEdited => {
    tileEdited.columnId = this.props.columnId;
    this.socket.emit('addTile', tileEdited);
    this.fetchTiles();
  };

  render() {
    return (
      <ColumnDiv>
        <ItemDiv>
          <ColumnHeader title={this.props.title} />
        </ItemDiv>
        {this.state.tiles.map(tile => (
          <ItemDiv key={tile.id || 0}>
            <Tile
              tileData={tile}
              onEditionCompleted={this.tileEditionCompleted}
            />
          </ItemDiv>
        ))}
        <ItemDiv>
          <PlusButton onClick={this.addNewEmptyTile} />
        </ItemDiv>
      </ColumnDiv>
    );
  }
}

Column.propTypes = {
  columnId: PropTypes.number.isRequired,
  title: PropTypes.string,
};

export default Column;
