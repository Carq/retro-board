import FontIcon from 'components/FontIcon';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TextBarDiv = styled.div`
  align-items: center;
  display: flex;
`;

const TextDiv = styled.div`
  color: ${props => props.greyOut && '#8b8b8b'};
`;

class TextBar extends React.Component {
  render() {
    return (
      <TextBarDiv>
        <TextDiv greyOut={!this.props.text}>
          {this.props.text || this.props.placeholder}
        </TextDiv>
        <FontIcon
          icon="edit"
          large={!this.props.smallIcon}
          onClick={this.props.onClick}
        />
      </TextBarDiv>
    );
  }
}

TextBar.propTypes = {
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  smallIcon: PropTypes.bool,
  text: PropTypes.string,
};

export default TextBar;
