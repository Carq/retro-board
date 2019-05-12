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
          <Column columnId={1} title="Went well" />
          <Column columnId={2} title="Was bad" />
          <Column columnId={3} title="Improvments" />
        </ColumnsContainer>
      </div>
    );
  }
}

export default Board;
