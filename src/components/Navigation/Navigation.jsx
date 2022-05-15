import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';
import { StyledLink } from './Navigation.styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledLink
          to="/"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </StyledLink>
        {isLoggedIn && (
          <StyledLink
            to="/contacts"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <ImportContactsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Contacts
          </StyledLink>
        )}
      </Breadcrumbs>
    </nav>
  );
}
