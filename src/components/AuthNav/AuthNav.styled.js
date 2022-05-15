import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import bg from "assets/image.jpeg";

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  /* margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: #331333; */
  color: ${props => props.theme.colors.newspapper};
  font-weight: bold;
  font-size: 20px;
  transition: ${props => props.theme.animation};
  &:hover {
    color: #000000;
  }
  /* text-decoration: none; */
  /* margin: 1rem; */
  /* position: relative; */
  /* 
  display: 'inline-block';
  text-decoration: 'none';
  padding: 12;
  font-weight: 700;
  color: '#2A363B'; */
  &.active {
    color: '#E84A5F';
  }
`;
