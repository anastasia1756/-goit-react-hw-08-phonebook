import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperations';
import { FormControl, FormLabel, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Btn } from './RegisterPage.styled';
import { ErrorMessage } from '@hookform/error-message';
import { Toaster } from 'react-hot-toast';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({});
  const onSubmit = data => {
    console.log(data);
    resetField('name');
    resetField('email');
    resetField('password');
    dispatch(registration(data));
  };

  return (
    <>
      <Grid container alignItems="center" justify="center" direction="column">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            sx={{
              backgroundColor: '#ffffff',
              padding: '25px',
              border: '1px dashed black',
              borderRadius: '8%',
            }}
          >
            <FormLabel
              sx={{ margin: '15px auto', fontWeight: '700', fontSize: '32px' }}
            >
              Registration
            </FormLabel>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Name"
                InputLabelProps={{
                  style: { color: '#6C5F5B', fontWeight: 700 },
                }}
                inputProps={{
                  style: {
                    width: '300px',
                    backgroundColor: '#DAC3B3',
                  },
                }}
                sx={{
                  marginBottom: '20px',
                }}
                {...register('name', {
                  required: true,
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                    message: 'The name must contain the characters only',
                  },
                })}
              />
            </Grid>
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p
                  style={{
                    marginTop: -15,
                    color: 'red',
                    fontSize: 12,
                    width: 300,
                  }}
                >
                  {message}
                </p>
              )}
            />
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Email"
                InputLabelProps={{
                  style: { color: '#DAC3B3', fontWeight: 700 },
                }}
                inputProps={{
                  style: {
                    width: '300px',
                    backgroundColor: '#6C5F5B',
                  },
                }}
                sx={{
                  marginBottom: '20px',
                }}
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
            </Grid>
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p
                  style={{
                    marginTop: -15,
                    color: 'red',
                    fontSize: 12,
                    width: 200,
                  }}
                >
                  {message}
                </p>
              )}
            />
            <TextField
              placeholder="Password"
              required
              id="outlined-required"
              label="Password"
              type="password"
              autoComplete="off"
              InputLabelProps={{
                style: { color: '#6C5F5B', fontWeight: 700 },
              }}
              inputProps={{
                style: {
                  width: '300px',
                  backgroundColor: '#DAC3B3',
                },
              }}
              sx={{
                marginBottom: '20px',
              }}
              {...register('password', {
                minLength: {
                  value: 8,
                  message: 'Min length is 8 characters',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p
                  style={{
                    marginTop: -15,
                    color: 'red',
                    fontSize: 12,
                    width: 200,
                  }}
                >
                  {message}
                </p>
              )}
            />
            <Btn
              type="submit"
              InputLabelProps={{
                style: { color: '#6C5F5B', fontWeight: 700 },
              }}
              sx={{
                marginBottom: '20px',
              }}
            />
            <Toaster />
          </FormControl>
        </form>
      </Grid>
    </>
  );
};
