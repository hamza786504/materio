import { Typography, Card, Grid, Avatar } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

function index() {
  return (
    <>
      <Typography
        variant='h6'
        sx={{
          my: 5,
          ml: 3,
          lineHeight: 1,
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '1rem !important'
        }}
      >
        NEXT DRAWS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className='flex' sx={{ p: 5 , alignItems : "center" }}>
            <Typography
              variant='h6'
              sx={{
                my: 5,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              SORTEIO 001
            </Typography>
            <Avatar sx={{ height: '70px', width: '70px', mb: 4 }}>I</Avatar>
            <div>
              <Typography>
                Prêmio:<span className='font'>R$ 300,00 em pix ou camisa de futebol</span>
              </Typography>
              <Typography>
                Data:<span className='font'>02/11/2023</span>
              </Typography>
              <Typography>
                Categoria:<span className='font'>Pré-lançamento</span>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className='flex' sx={{ p: 5 }}>
            <Typography
              variant='h6'
              sx={{
                my: 5,
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              SORTEIO 002
            </Typography>
            <Avatar sx={{ height: '70px', width: '70px', mb: 4 }}>I</Avatar>
            <div>
              <Typography>
                Prêmio:<span className='font'>R$ 300,00 em pix ou camisa de futebol</span>
              </Typography>
              <Typography>
                Data:<span className='font'>02/11/2023</span>
              </Typography>
              <Typography>
                Categoria:<span className='font'>Pré-lançamento</span>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className='flex' sx={{ p: 5 }}>
            <Typography
              variant='h6'
              sx={{
                my: 5,
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              SORTEIO 003
            </Typography>
            <Avatar sx={{ height: '70px', width: '70px', mb: 4 }}>I</Avatar>
            <div>
              <Typography>
                Prêmio:<span className='font'>R$ 300,00 em pix ou camisa de futebol</span>
              </Typography>
              <Typography>
                Data:<span className='font'>02/11/2023</span>
              </Typography>
              <Typography>
                Categoria:<span className='font'>Pré-lançamento</span>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className='flex' sx={{ p: 5 }}>
            <Typography
              variant='h6'
              sx={{
                my: 5,
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              SORTEIO 004
            </Typography>
            <Avatar sx={{ height: '70px', width: '70px', mb: 4 }}>I</Avatar>
            <div>
              <Typography>
                Prêmio:<span className='font'>R$ 300,00 em pix ou camisa de futebol</span>
              </Typography>
              <Typography>
                Data:<span className='font'>02/11/2023</span>
              </Typography>
              <Typography>
                Categoria:<span className='font'>Pré-lançamento</span>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className='flex' sx={{ p: 5 }}>
            <Typography
              variant='h6'
              sx={{
                my: 5,
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              SORTEIO 005
            </Typography>
            <Avatar sx={{ height: '70px', width: '70px', mb: 4 }}>I</Avatar>
            <div>
              <Typography>
                Prêmio:<span className='font'>R$ 300,00 em pix ou camisa de futebol</span>
              </Typography>
              <Typography>
                Data:<span className='font'>02/11/2023</span>
              </Typography>
              <Typography>
                Categoria:<span className='font'>Pré-lançamento</span>
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default index
