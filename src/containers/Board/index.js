import EditableText from 'containers/EditableText';
import React from 'react';
import styled from 'styled-components';

const BoardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BoardChildDiv = styled.div`
  margin: 0 auto;
`;

class Board extends React.Component {
  state = {
    retroTitle: 'Test Board name',
    isEditingTitle: null,
  };

  handleTitleConfirm = title => {
    this.setState({
      retroTitle: title,
      isEditingTitle: false,
    });
  };

  handleTitleBarOnClick = () => {
    this.setState({
      isEditingTitle: true,
    });
  };

  render() {
    return (
      <BoardDiv>
        <BoardChildDiv>
          <EditableText large text="" placeholder="No title" />
        </BoardChildDiv>
        <BoardChildDiv>
          <EditableText text="" placeholder="No desciption" />
        </BoardChildDiv>
      </BoardDiv>
    );
  }
}

export default Board;
