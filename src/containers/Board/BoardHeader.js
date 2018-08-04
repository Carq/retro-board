import EditableText from 'containers/EditableText';
import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const HeaderChildDiv = styled.div`
  margin: 0 auto;
`;

class BoardHeader extends React.Component {
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
      <HeaderDiv>
        <HeaderChildDiv>
          <EditableText large text="" placeholder="No title" />
        </HeaderChildDiv>
        <HeaderChildDiv>
          <EditableText text="" placeholder="No desciption" />
        </HeaderChildDiv>
      </HeaderDiv>
    );
  }
}

export default BoardHeader;
