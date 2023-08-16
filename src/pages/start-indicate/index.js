import {
  Typography,
  Card,
  Grid,
  Avatar,
  Button,
  Divider,
  FormControl,
  InputLabel,
  FormHelperText,
  OutlinedInput
} from '@mui/material'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useForm, Controller } from 'react-hook-form'
import { width } from '@mui/system'
import Link from 'next/link'
import React, { useState } from 'react'

function Index() {
  const [userName, setUserName] = useState('')

  const onSubmit = data => {
    const { userName } = data
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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('1', "00/00/0000" , "FULANO DE TAL"),
    createData('2', "00/00/0000" , "CICLANO DA SILVA")
  ]

  return (
    <>
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
        START INDICATE
      </Typography>

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
        Copy your link and refer your friends, acquaintances and family, the more you refer, the more points you can
        earn.
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Link href='/' style={{ textDecoration: 'none', color: 'black' }}>
          https://sorteiosepremios.com/username
        </Link>
        <Button style={{ border: '1px solid black', marginLeft: '20px', color: 'black' }}>Copy</Button>
      </div>
      <Divider component='div' />

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
        YOUR INDICATIONS
      </Typography>

      <form noValidate autoComplete='off' style={{ height: '100%' }}>
        <FormControl>
          <InputLabel htmlFor='name' error={Boolean(errors.name)}>
            Name
          </InputLabel>
          <Controller
            name='name'
            control={control}
            render={({ field: { onBlur } }) => (
              <OutlinedInput
                value={userName}
                onBlur={onBlur}
                onChange={handleUserName}
                id='name'
                error={Boolean(errors.name)}
                type='text'
                label='Name'
              />
            )}
          />
          {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category.message}</FormHelperText>}
        </FormControl>
        <FormControl sx={{ ml: 2 }}>
          <InputLabel htmlFor='category' error={Boolean(errors.category)}>
            00/00/0000 | 00/00/0000
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
          {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category.message}</FormHelperText>}
        </FormControl>




        <Table sx={{ maxWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight : "800"}}>#</TableCell>
              <TableCell style={{fontWeight : "800"}} align='right'>Date</TableCell>
              <TableCell style={{fontWeight : "800"}} align='right'>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>{row.name}</TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </form>
    </>
  )
}

export default Index
