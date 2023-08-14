import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Grid, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import CategoryCard from 'src/Components/CategoryCard'

function Coupens() {
  const [userName, setUserName] = useState('')

  const onSubmit = data => {
    const { category } = data
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const handleUserName = e => {
    setUserName(e.target.value)
  }

  return (
    <>
      <form noValidate autoComplete='off' style={{ height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div className='content_inner' style={{ flexGrow: 1 }}>
            <h2>CREATE YOUR USERNAME</h2>
            <div className='userform_cover'>
              <FormControl>
                <InputLabel htmlFor='category' error={Boolean(errors.category)}>
                  CREATE YOUR USERNAME
                </InputLabel>
                <Controller
                  name='category'
                  control={control}
                  render={({ field: { onBlur } }) => (
                    <OutlinedInput
                      value={userName}
                      onBlur={onBlur}
                      onChange={handleUserName}
                      id='category'
                      error={Boolean(errors.category)}
                      type='text'
                      label='Category'
                    />
                  )}
                />
                {errors.category && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.category.message}</FormHelperText>
                )}
              </FormControl>
              <br />
              <br />
              <Typography textAlign='center' variant='body-1' sx={{ my: 2 }}>
                Tip: Choose a simple and easy username for people always make fun of you
              </Typography>
              <br />
              <br />
              <Typography textAlign='center' variant='body-1'>
                Characters like: . , * not accepted
              </Typography>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <input type='submit' value='CREATE' id='create_username' className='form_btn' />
          </div>
        </div>
      </form>
    </>
  )
}

export default Coupens
