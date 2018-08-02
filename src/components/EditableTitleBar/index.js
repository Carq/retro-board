import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontIcon from 'components/FontIcon';

const EditableTitleBarDiv = styled.div`
  align-items: center;
  display: flex;
  margin: 5px;
`;

const Input = styled.input`
  outline: none;
  border-bottom: 1px dotted #999;
  line-height: 1.5;
  font-size: 32px;
  padding: 10px 15px;
`;

class EditableTitleBar extends React.Component {
  state = {
    title: this.props.title,
  };

  handleChange = event => {
    this.setState({ title: event.target.value });
  };

  onTitleConfim = () => {
    this.props.onTitleConfim(this.state.title);
  };

  render() {
    return (
      <EditableTitleBarDiv>
        <Input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <FontIcon large icon="check" onClick={this.onTitleConfim} />
      </EditableTitleBarDiv>
    );
  }
}

EditableTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleConfim: PropTypes.func,
};

export default EditableTitleBar;
