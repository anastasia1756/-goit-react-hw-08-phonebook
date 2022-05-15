import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/authSlice';
import { logOut } from 'redux/auth/authOperations';
import { Container, Name } from './UserMenu.styled';
import { Button } from '@mui/material';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  return (
    <Container>
      <Name>Welcome, {name}!</Name>
      <Button
        sx={{
          backgroundColor: 'text.primary',
          color: '#DAC3B3',
          '&.MuiButton-root:hover': {
            backgroundColor: '#DAC3B3',
            color: '#6C5F5B',
          },
        }}
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Container>
  );
}
