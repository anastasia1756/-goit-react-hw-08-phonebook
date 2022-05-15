import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const HomePage = () => {
  return (
    <div>
      <h2>
        Welcome to our Phonebook!
        <ContactPhoneIcon
          sx={{ mr: 0.5, fontSize: 30, marginLeft: 3, color: '#DAC3B3' }}
        />
      </h2>
    </div>
  );
};
