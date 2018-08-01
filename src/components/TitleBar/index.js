import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EditIcon from 'components/EditIcon';

const TitleBarDiv = styled.div`
  align-items: center;
  display: flex;
`;

class TitleBar extends React.Component {
  render() {
    return (
      <TitleBarDiv>
        <h1>{this.props.title}</h1>
        <EditIcon icon="edit" />
      </TitleBarDiv>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleBar;
