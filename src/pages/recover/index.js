import React from 'react'
import { Card, Typography, TextField, Button } from '@mui/material'

function index() {
  return (
    <div className='conten_body'>
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
          RECOVER PASSWORD
        </Typography>
        <Typography textAlign='center' variant='body-1'>
          Go to the email provided and click on the link sent to change your password.
        </Typography>
      </Card>
    </div>
  )
}

export default index
