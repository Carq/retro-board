import FontIcon from 'components/FontIcon';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TextBarDiv = styled.div`
  align-items: center;
  display: flex;
`;

const TextDiv = styled.div`
  color: ${props => (props.greyOut ? '#8b8b8b' : '#000')};
`;

class TextBar extends React.Component {
  render() {
    return (
      <TextBarDiv>
        <TextDiv greyOut={!this.props.text}>
          {this.props.text || this.props.placeholder}
        </TextDiv>
        <FontIcon icon="edit" large onClick={this.props.onClick} />
      </TextBarDiv>
    );
  }
}

TextBar.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextBar;
