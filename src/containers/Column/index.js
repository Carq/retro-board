import ColumnHeader from './ColumnHeader';
import PlusButton from './PlusButton';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColumnDiv = styled.div`
  flex: 1;
  min-height: 500px;
  min-width: 400px;
  padding: 5px;
`;

const ItemDiv = styled.div`
  margin-bottom: 10px;
`;

class Column extends React.Component {
  render() {
    return (
      <ColumnDiv>
        <ItemDiv>
          <ColumnHeader title={this.props.title} />
        </ItemDiv>
        <ItemDiv>
          <PlusButton />
        </ItemDiv>
      </ColumnDiv>
    );
  }
}

Column.propTypes = {
  title: PropTypes.string,
};

export default Column;
