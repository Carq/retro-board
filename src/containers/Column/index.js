import ColumnHeader from './ColumnHeader';
import PlusButton from './PlusButton';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tile from 'containers/Tile';

const ColumnDiv = styled.div`
  flex: 1;
  min-height: 500px;
  min-width: 400px;
  padding: 5px;
`;

const ItemDiv = styled.div`
  margin-bottom: 6px;
`;

class Column extends React.Component {
  state = {
    tiles: [],
  };

  addTile = () => {
    this.setState({
      tiles: [
        ...this.state.tiles,
        { order: this.state.tiles.length + 1, description: 'test' },
      ],
    });
  };

  render() {
    return (
      <ColumnDiv>
        <ItemDiv>
          <ColumnHeader title={this.props.title} />
        </ItemDiv>
        {this.state.tiles.map((tile, index) => (
          <ItemDiv key={index}>
            <Tile tile={tile} />
          </ItemDiv>
        ))}
        <ItemDiv>
          <PlusButton onClick={this.addTile} />
        </ItemDiv>
      </ColumnDiv>
    );
  }
}

Column.propTypes = {
  title: PropTypes.string,
};

export default Column;
