import React, { useState } from 'react'
import { Card, Typography, Button, Link } from '@mui/material'

/* eslint-disable */

const OTPInputGroup = () => {
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
  }

  const handleSubmit = () => {

  }
  return (
    <div className='content_body'>
      <Card sx={{ width: '400px', p: 10 }}  style={{minHeight: "500px"}}>
        <img src='/images/apple-touch-icon.png' alt='logo' height='70px' className='d-flex' />
        <Typography
          textAlign='center'
          variant='h3'
          sx={{
            mb: 4,
            ml: 3,
            lineHeight: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '1.4rem !important'
          }}
          style={{marginTop: "20px"}}
        >
          MAKE YOUR REGISTRATION
        </Typography>
        <Typography
          textAlign='center'
          variant='h6'
          sx={{
            mt: 5,
            mb:3,
            ml: 3,
            lineHeight: 1,
            textTransform: 'uppercase',
            fontSize: '1rem !important'
          }}
        >
          {/* {themeConfig.templateName} */}
          Type the code
        </Typography>
        <Typography
          textAlign='center'
          variant='body2'
          sx={{
            mb: 3,
            ml: 3,
            lineHeight: 1
          }}
        >
          {/* {themeConfig.templateName} */}
          To continue, enter the 6-digit code sent by EMAIL to
        </Typography>
        <Typography
          textAlign='center'
          variant='body1'
          sx={{
            mb: 5,
            fontWeight: 600
          }}
        >
          email@email.com
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
        <Link href='#' className='d-flex'>
          Resend code: 00:00
        </Link>

        <Button fullWidth size='large' type='submit' variant='contained' sx={{ mt: 6 }}>
          ADVANCE
        </Button>
      </Card>
    </div>
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

export default OTPInputGroup

/* eslint-enable */