import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

  :focus {
    outline: 0;
  }
`;

class PlusButton extends React.Component {
  render() {
    return (
      <PlusButtonDiv onClick={this.props.onClick}>
        <FontAwesomeIcon size="lg" icon="plus-circle" />
      </PlusButtonDiv>
    );
  }
}

PlusButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlusButton;
