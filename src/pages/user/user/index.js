import React from 'react'
import { Card, Typography, Button, TextField, FormControlLabel, Checkbox } from '@mui/material'
import BlankLayout from 'src/@core/layouts/BlankLayout'

function User() {
  return (
    <div className='body'>
      <Card sx={{ width: '400px', p: 10 }}>
        <img src='/images/apple-touch-icon.png' alt='logo' height='70px' className='d-flex' />
        <Typography
          textAlign='center'
          variant='h3'
          sx={{
            my: 8,
            ml: 3,
            lineHeight: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '1rem !important'
          }}
        >
          {/* {themeConfig.templateName} */}
          MAKE YOUR REGISTRATION
        </Typography>
        <form autoComplete='off' onSubmit={e => e.preventDefault()}>
          <TextField
            autoFocus
            type='email'
            label='How would you like to be called'
            sx={{ display: 'flex', mb: 10, mt: 5 }}
          />
          <TextField autoFocus type='email' label='CPF' sx={{ display: 'flex', my: 5 }} />
          <TextField autoFocus type='email' label='Create a password' sx={{ display: 'flex', my: 5 }} />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='I agree with the terms and policies'
          />
          <Button fullWidth size='large' type='submit' variant='contained' sx={{ mt: 5 }}>
            REGISTER
          </Button>
        </form>
      </Card>
    </div>
  )
}

// User.getLayout = page => <BlankLayout>{page}</BlankLayout>
// User.guestGuard = true

export default User
