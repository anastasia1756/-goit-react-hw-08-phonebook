import { Link } from 'react-router-dom';
import { StyledLink, Container } from './AuthNav.styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export function AuthNav() {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledLink
          to="/register"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <VpnKeyIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Register
        </StyledLink>
        <StyledLink
          to="/login"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HowToRegIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Login
        </StyledLink>
      </Breadcrumbs>
    </Container>
  );
}
