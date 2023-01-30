import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';


function Base({title,description,children}){
//react navigator
const history = useHistory();

const logOutFunc = () => {
  localStorage.clear("username")
  history.push('/dashboard')
}

    return(
        <div className='main-component'>
          <AppBar position='static'>
            <Toolbar variant='dense'>
              <Button color='inherit' onClick={()=>history.push('/')}>
                <span className='nav-icon'>🏡</span><span className='nan-name'>Home</span>
              </Button>
              <Button color='inherit' onClick={()=>history.push('/dashboard')}>
                <span  className='nav-icon'>📄</span> <span className='nan-name'>Dashboard</span> 
              </Button>
              <Button color='inherit' onClick={()=>history.push('/studentsData')}>
                <span  className='nav-icon'>👨‍🎓</span><span className='nan-name'>Student-data</span>
              </Button>
              <Button color='inherit' onClick={()=>history.push('/register')}>
                <span  className='nav-icon'>🙋‍♂️</span><span className='nan-name'>login</span>
              </Button>
              <Button color='inherit' onClick={()=>history.push('/AddData')}>
                <span  className='nav-icon'>➕</span><span className='nan-name'>Add-Data</span>
              </Button>
              <Button color='inherit' onClick={logOutFunc}>
                <span  className='nav-icon'>👋</span> <span className='nan-name'>LogOut</span>
              </Button>
            </Toolbar>
          </AppBar>
          <header>
            <h1 className='heading'>{title}</h1>
          </header>
          <main className='main-segment'>
            <h2>{description}</h2>
            
            <div className='children-segment'>
                {children}
            </div>
          </main>
        </div>
    )
}

export default Base;