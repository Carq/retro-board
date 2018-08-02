import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 32px;
  color: ${props => (props.greyOut ? '#8b8b8b' : '#000')};
`;

export default H1;
