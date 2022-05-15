import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;
export const Name = styled.p`
  display: block;
  font-weight: 700;
  margin: 0;
  margin-right: 12px;
  color: ${props => props.theme.colors.newspapper};
`;
