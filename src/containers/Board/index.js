import Column from 'containers/Column';
import Header from './BoardHeader';
import React from 'react';
import styled from 'styled-components';

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  justify-content: space-evenly;
`;

class Board extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ColumnsContainer>
          <Column title="Went well" />
          <Column title="Was bad" />
          <Column title="Improvments" />
        </ColumnsContainer>
      </div>
    );
  }
}

export default Board;
