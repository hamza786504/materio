import React from 'react'
import { Card, TextField, Button, Link, Typography } from '@mui/material'

function otp() {
  return (
    <div className='content_body'>
      <Card sx={{ width: '400px', p: 10 }}  style={{minHeight: "500px"}}>
        <img src='/images/apple-touch-icon.png' height='70px' className='d-flex' />
        <Typography
          textAlign='center'
          variant='h3'
          sx={{
            my: 8,
            ml: 3,
            lineHeight: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '1.4rem !important'
          }}
        >
          {/* {themeConfig.templateName} */}
          MAKE YOUR REGISTRATION
        </Typography>
        <Typography
          textAlign='center'
          variant='body1'
          sx={{
            lineHeight: 1,

            textTransform: 'uppercase',
            fontSize: '1rem !important'
          }}
        >
          {/* {themeConfig.templateName} */}
          Type the code
        </Typography>
        <form autoComplete='off' onSubmit={e => e.preventDefault()}>
          <TextField autoFocus type='email' label='Email' sx={{ display: 'flex', mb: 10, mt: 5 }} />
          <Button fullWidth size='large' type='submit' variant='contained' sx={{ mt: 6 }}>
            ADVANCE
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default otp
