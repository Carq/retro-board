import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const PlusButtonDiv = styled.button`
  align-content: center;
  background-color: #c4ffd2;
  border: 0;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  width: 100%;

  :hover {
    background-color: #3cff6c;
  }
  :active {
    background-color: #00ec00;
  }
  :focus {
    outline: 0;
  }
`;

class PlusButton extends React.Component {
  render() {
    return (
      <PlusButtonDiv>
        <FontAwesomeIcon size="lg" icon="plus-circle" />
      </PlusButtonDiv>
    );
  }
}

export default PlusButton;
