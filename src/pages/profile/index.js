import { FormControl, InputLabel, OutlinedInput, FormHelperText, Typography } from '@mui/material'
import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

function Index() {
  const [surName, setSurName] = useState('')
  const [userName, setUserName] = useState('')
  const [CPF, setCPF] = useState('')
  const [Email, setEmail] = useState('')
  const [open , setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const handleSurName = e => {
    setUserName(e.target.value)
  }

  const handleUserName = e => {
    setUserName(e.target.value)
  }

  const handleCPF = e => {
    setCPF(e.target.value)
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }




  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  })


  const handleInputChange = (inputId, value) => {
    setInputValues(prevInputValues => ({
      ...prevInputValues,
      [inputId]: value
    }))
  };

  const togglePopup = () => {
    setOpen(!open)
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

        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', margin: '30px 0' }}>
          <Image width={150} height={150} src='/images/avatars/1.png' />
          <div style={{ marginLeft: '30px' }}>
            <Button style={{ background: '#081f3f', color: 'white', paddingLeft: '30px', paddingRight: '30px' }}>
              UPLOAD NEW PHOTO
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
        </div>

        <form noValidate autoComplete='off' style={{ height: '100%' }}>
          <FormControl>
            <InputLabel htmlFor='surName' error={Boolean(errors.surName)}>
              Sur Name
            </InputLabel>
            <Controller
              name='surName'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={surName}
                  onBlur={onBlur}
                  onChange={handleSurName}
                  id='surName'
                  error={Boolean(errors.surName)}
                  type='text'
                  label='SurName'
                />
              )}
            />
            {errors.surName && <FormHelperText sx={{ color: 'error.main' }}>{errors.surName.message}</FormHelperText>}
          </FormControl>
          <br />
          <br />
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
          <FormControl style={{ marginLeft: '20px' }}>
            <InputLabel htmlFor='CPF' error={Boolean(errors.CPF)}>
              CPF
            </InputLabel>
            <Controller
              name='CPF'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={CPF}
                  onBlur={onBlur}
                  onChange={handleCPF}
                  id='CPF'
                  error={Boolean(errors.CPF)}
                  type='text'
                  label='CPF'
                />
              )}
            />
            {errors.CPF && <FormHelperText sx={{ color: 'error.main' }}>{errors.CPF.message}</FormHelperText>}
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel htmlFor='Email' error={Boolean(errors.Email)}>
              Email
            </InputLabel>
            <Controller
              name='Email'
              control={control}
              render={({ field: { onBlur } }) => (
                <OutlinedInput
                  value={Email}
                  onBlur={onBlur}
                  onChange={handleEmail}
                  id='Email'
                  error={Boolean(errors.Email)}
                  type='text'
                  label='Email'
                />
              )}
            />
            {errors.Email && <FormHelperText sx={{ color: 'error.main' }}>{errors.Email.message}</FormHelperText>}
          </FormControl>
          <br />
          <Button
            style={{
              marginTop: '20px',
              background: '#081f3f',
              color: 'white',
              paddingLeft: '30px',
              paddingRight: '30px',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
            onClick={() => {togglePopup()}}
          >
            SAVE CHANGES
          </Button>
        </form>

        <div className={`popup ${open === false ? "d-none" : ""}`} style={{display : "flex" , flexDirection : "column"}}>
            <button className="close_icon" onClick={() => {togglePopup()}}>X</button>
          <div style={{flexGrow : "1"}}>
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
              Type the code
            </Typography>
            <Typography
              variant='h6'
              sx={{
                my: 5,
                lineHeight: 1,
                fontWeight: 400,
                textTransform: 'uppercase',
                mt : 2,
                fontSize: '0.7rem !important'
              }}
            >
              To continue, enter the 6-digit code sent to your email
            </Typography>



















            <div id='OTPInputGroup' className='digitGroup' data-autosubmit='true'>
            <OTPInput
              id='input1'
              type='number'
              value={inputValues.input1}
              onValueChange={handleInputChange}
              previousId={null}
              handleSubmit={handleSubmit}
              nextId='input2'
            />
            <OTPInput
              id='input2'
              type='number'
              value={inputValues.input2}
              onValueChange={handleInputChange}
              previousId='input1'
              handleSubmit={handleSubmit}
              nextId='input3'
            />
            <OTPInput
              id='input3'
              type='number'
              value={inputValues.input3}
              onValueChange={handleInputChange}
              previousId='input2'
              handleSubmit={handleSubmit}
              nextId='input4'
            />
            <OTPInput
              id='input4'
              type='number'
              value={inputValues.input4}
              onValueChange={handleInputChange}
              previousId='input3'
              handleSubmit={handleSubmit}
              nextId='input5'
            />
            <OTPInput
              id='input5'
              type='number'
              value={inputValues.input5}
              onValueChange={handleInputChange}
              previousId='input4'
              handleSubmit={handleSubmit}
              nextId='input6'
            />
            <OTPInput
              id='input6'
              type='number'
              value={inputValues.input6}
              onValueChange={handleInputChange}
              previousId='input5'
              handleSubmit={handleSubmit}
            />
          </div>










            <Typography
              variant='h6'
              sx={{
                my: 5,
                lineHeight: 1,
                fontWeight: 400,
                textTransform: 'uppercase',
                fontSize: '0.7rem !important'
              }}
            >
              Resend code 00:30
            </Typography>
          </div>

          <Button style={{ background: '#000d2f', color: 'white', padding: '10px 30px' , margin: "20px auto" }}>CONFIRM</Button>
        </div>
      </div>
    </>
  )
}










//Our child component
const OTPInput = ({ id, previousId, nextId, value, onValueChange, handleSubmit }) => {
    //This callback function only runs when a key is released
    const handleKeyUp = e => {
      //check if key is backspace or arrowleft
      if (e.keyCode === 8 || e.keyCode === 37) {
        //find the previous element
        const prev = document.getElementById(previousId)
        if (prev) {
          //select the previous element
          prev.select()
        }
      } else if (
        (e.keyCode >= 48 && e.keyCode <= 57) || //check if key is numeric keys 0 to 9
        (e.keyCode >= 65 && e.keyCode <= 90) || //check if key is alphabetical keys A to Z
        (e.keyCode >= 96 && e.keyCode <= 105) || //check if key is numeric keypad keys 0 to 9
        e.keyCode === 39 //check if key is right arrow key
      ) {
        //find the next element
        const next = document.getElementById(nextId)
        if (next) {
          //select the next element
          next.select()
        } else {
          //check if inputGroup has autoSubmit enabled
          const inputGroup = document.getElementById('OTPInputGroup')
          if (inputGroup && inputGroup.dataset['autosubmit']) {
            //submit the form
            handleSubmit()
          }
        }
      }
    }
  
    return (
      <input
        id={id}
        name={id}
        type='text'
        className='DigitInput'
        value={value}
        maxLength='1'
        onChange={e => onValueChange(id, e.target.value)}
        onKeyUp={handleKeyUp}
      />
    )
  }
  

export default Index
