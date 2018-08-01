import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditIconDiv = styled.div`
  align-items: center;
  display: flex;
  margin: ${props => props.margin + 'px'};
`;

class EditIcon extends React.Component {
  handleClick() {
    alert('test');
  }

  render() {
    return (
      <EditIconDiv margin={this.props.margin} onClick={this.handleClick}>
        <FontAwesomeIcon icon="edit" />
      </EditIconDiv>
    );
  }
}

EditIcon.propTypes = {
  margin: PropTypes.string,
};

EditIcon.defaultProps = {
  margin: '5',
};

export default EditIcon;
