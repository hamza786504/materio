import { FormControl, InputLabel, OutlinedInput, FormHelperText, Typography } from '@mui/material'
import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

function Index() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')
  const [Email, setEmail] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const handlecurrentPassword = e => {
    setCurrentPassword(e.target.value)
  }

  const handleNewPassword = e => {
    setNewPassword(e.target.value)
  }

  const handleRepeatNewPassword = e => {
    setRepeatNewPassword(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <>
      <div className='page_content' style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
          <Button style={{ background: '#e6e6e6', color: 'black', paddingLeft: '30px', paddingRight: '30px' }}>
            ACCOUNT
          </Button>
          <Button
            style={{
              border: '1px solid black',
              marginLeft: '20px',
              color: 'black',
              paddingLeft: '30px',
              paddingRight: '30px'
            }}
          >
            SECURITY
          </Button>
        </div>

        <Typography
          variant='h6'
          sx={{
            my: 5,
            lineHeight: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '1.4rem !important'
          }}
        >
          CHANGE PASSWORD
        </Typography>

        <form noValidate autoComplete='off' style={{ height: '100%' }}>
          <FormControl>
            <InputLabel htmlFor='currentPassword' error={Boolean(errors.currentPassword)}>
              Current Password
            </InputLabel>
            <Controller
              name='currentPassword'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={currentPassword}
                  onBlur={onBlur}
                  onChange={handlecurrentPassword}
                  id='currentPassword'
                  error={Boolean(errors.currentPassword)}
                  type='text'
                  label='currentPassword'
                />
              )}
            />
            {errors.currentPassword && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.currentPassword.message}</FormHelperText>
            )}
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel htmlFor='newPassword' error={Boolean(errors.newPassword)}>
              New Password
            </InputLabel>
            <Controller
              name='newPassword'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={newPassword}
                  onBlur={onBlur}
                  onChange={handleNewPassword}
                  id='newPassword'
                  error={Boolean(errors.newPassword)}
                  type='text'
                  label='New Password'
                />
              )}
            />
            {errors.newPassword && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.newPassword.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl style={{ marginLeft: '20px' }}>
            <InputLabel htmlFor='repeatNewPassword' error={Boolean(errors.repeatNewPassword)}>
              Repeat New Password
            </InputLabel>
            <Controller
              name='repeatNewPassword'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={repeatNewPassword}
                  onBlur={onBlur}
                  onChange={handleRepeatNewPassword}
                  id='repeatNewPassword'
                  error={Boolean(errors.repeatNewPassword)}
                  type='text'
                  label='repeatNewPassword'
                />
              )}
            />
            {errors.RepeatNewPassword && (
              <FormHelperText sx={{ color: 'error.main' }}>{errors.RepeatNewPassword.message}</FormHelperText>
            )}
          </FormControl>
          <br />

          <Typography
            variant='h6'
            sx={{
              my: 5,
              lineHeight: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: '0.8rem !important'
            }}
          >
            Password Requirements
          </Typography>

          <Typography
            variant='h6'
            sx={{
              my: 5,
              lineHeight: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: '0.7rem !important'
            }}
          >
            Minimum 8 characters long - the more, the better
          </Typography>

          <Typography
            variant='h6'
            sx={{
              my: 5,
              lineHeight: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: '0.7rem !important'
            }}
          >
            At least one lowercase & one uppercase character
          </Typography>
          <Typography
            variant='h6'
            sx={{
              my: 5,
              lineHeight: 1,
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: '0.7rem !important'
            }}
          >
            At least one number, symbol, or whitespace character
          </Typography>

          <div style={{ marginTop: '30px' }}>
            <Button style={{ background: '#081f3f', color: 'white', paddingLeft: '30px', paddingRight: '30px' }}>
              Save Changes
            </Button>
            <Button
              style={{
                border: '1px solid black',
                marginLeft: '20px',
                color: 'black',
                paddingLeft: '30px',
                paddingRight: '30px'
              }}
            >
              RESET
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Index
