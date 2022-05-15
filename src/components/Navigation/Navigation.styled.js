import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import bg from "assets/image.jpeg";

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
  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;
