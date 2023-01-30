import { Button } from '@mui/material'
import React from 'react'
import Base from '../Base/Base'

const NoPage = () => {
  return (
    <Base title='You Lost Your Way' description='Please click the below button to go Home Page'>
        <Button variant="outlined" color="primary" size = "large">Home</Button>
    </Base>
  )
}

export default NoPage
