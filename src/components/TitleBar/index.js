import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontIcon from 'components/FontIcon';
import H1 from 'components/H1';

const TitleBarDiv = styled.div`
  align-items: center;
  display: flex;
`;

class TitleBar extends React.Component {
  render() {
    return (
      <TitleBarDiv>
        <H1 greyOut={!this.props.title}>{this.props.title || 'No title'}</H1>
        <FontIcon icon="edit" large onClick={this.props.onClick} />
      </TitleBarDiv>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TitleBar;
