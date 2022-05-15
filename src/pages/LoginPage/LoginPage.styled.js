import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Btn = styled(TextField)`
  background-color: ${props => props.theme.colors.newspapper};

  &:hover {
    background-color: ${props => props.theme.colors.tin};
  }
`;
