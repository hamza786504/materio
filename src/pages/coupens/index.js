import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Grid } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import CategoryCard from 'src/Components/CategoryCard'

/* eslint-disable */

function Coupens() {
  const [searchCategoryValue, setSearchCategoryValue] = useState('')

  const [categories] = useState([
    {
      heading: 'STANDARD PL',
      number: 99999990,
      indication_mail: ''
    },
    {
      heading: 'STANDARD PL',
      number: 99999991,
      indication_mail: 'e-mail@email.com'
    },
    {
      heading: 'STANDARD PL',
      number: 99999992,
      indication_mail: 'e-mail@email.com'
    },
    {
      heading: 'STANDARD PL',
      number: 99999993,
      indication_mail: 'e-mail@email.com'
    },
    {
      heading: 'STANDARD PL',
      number: 99999994,
      indication_mail: 'e-mail@email.com'
    },
    {
      heading: 'STANDARD PL',
      number: 99999995,
      indication_mail: 'e-mail@email.com'
    },
    {
      heading: 'STANDARD PL',
      number: 99999996,
      indication_mail: 'e-mail@email.com'
    },
    {
      heading: 'STANDARD PL',
      number: 99999997,
      indication_mail: 'e-mail@email.com'
    }
  ])

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

  const handleSearchCategoryChange = e => {
    setSearchCategoryValue(e.target.value)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className='content_inner' style={{ flexGrow: 1 }}>
        <h2>COUPONS</h2>
        <p style={{ fontSize: '20px' }}>TOTAL: {categories.length}</p>

        <form noValidate autoComplete='off'>
          <FormControl>
            <InputLabel htmlFor='category' error={Boolean(errors.category)}>
              Category
            </InputLabel>
            <Controller
              name='category'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={searchCategoryValue}
                  onBlur={onBlur}
                  onChange={handleSearchCategoryChange}
                  id='category'
                  error={Boolean(errors.category)}
                  type='text'
                  label='Category'
                />
              )}
            />
            {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category.message}</FormHelperText>}
          </FormControl>
        </form>

        <div className='cards'>
          <Grid container spacing={2}>
            {categories.map((category, key) => (
              <CategoryCard key={key} category={category} />
            ))}
          </Grid>
        </div>
      </div>
      <div className='pagination_center_cover'>
        <Stack spacing={2}>
          <Pagination count={3} hidePrevButton hideNextButton variant='outlined' shape='rounded' />
        </Stack>
      </div>
    </div>
  )
}

/* eslint-enable */

export default Coupens;
