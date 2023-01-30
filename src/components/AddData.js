import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base'

const AddData = ({studentsData,setStudentsData}) => {

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [batch,setBatch] = useState("");
    const [gender,setGender] = useState("");
    const [experience,setExperience] = useState("");
    const history = useHistory();

    const addNewStudent = ()=>{
        const newStudent = {
            id,
            name,
            batch,
            gender,
            yearsofExperience : experience,
        }
        // console.log(newStudent)
        setStudentsData([...studentsData,newStudent])
        setId("");
        setName("");
        setBatch("");
        setGender("");
        setExperience("");
        history.push('/studentsData')
    }

    useEffect(() => {
      if (!localStorage.getItem("username")){
        history.replace('/register')
      }
    }, [])

  return (
    <Base title = 'ADD STUDENTS DATA' description= 'Here you can Add the Students Data'>
        <div className='input-section'>
            <TextField fullWidth label="Enter the ID" id="fullWidth" onChange={(event)=>setId(event.target.value)} value={id}/>
            <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={(event)=>setName(event.target.value)} value={name}/>
            <TextField fullWidth label="Enter the Batch" id="fullWidth" onChange={(event)=>setBatch(event.target.value)} value={batch}/>
            <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={(event)=>setGender(event.target.value)} value={gender}/>
            <TextField fullWidth label="Enter the Experience" id="fullWidth" onChange={(event)=>setExperience(event.target.value)} value={experience}/><br/><br/>
            <Button variant="contained" color="error" onClick={addNewStudent}>Add Data</Button> 
            </div>
    </Base>
  )
}

export default AddData