import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontIconDiv = styled.div`
  align-items: center;
  display: flex;
  padding: 2px;
  :hover {
    color: #1e87bf;
  }
  margin: ${props => props.margin + 'px'};
`;

class FontIcon extends React.Component {
  handleClick = this.handleClick.bind(this);

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <FontIconDiv margin={this.props.margin} onClick={this.handleClick}>
        <FontAwesomeIcon
          icon={this.props.icon}
          size={this.props.large && 'lg'}
        />
      </FontIconDiv>
    );
  }
}

FontIcon.propTypes = {
  margin: PropTypes.string,
  large: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

FontIcon.defaultProps = {
  margin: '15',
};

export default FontIcon;
