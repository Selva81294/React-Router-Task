import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Base from '../Base/Base'



const UpdateData = ({studentsData}) => {
    const {idx} = useParams();
    const [editID,setEditID] = useState("");
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [batch,setBatch] = useState("");
    const [gender,setGender] = useState("");
    const [experience,setExperience] = useState("");
    const history = useHistory();

const student = studentsData[idx]
 //console.log(student)
      useEffect(() => {
        setEditID(student.id)
        setId(student.id)
        setName(student.name)
        setBatch(student.batch)
        setGender(student.gender)
        setExperience(student.yearsofExperience)
      }, [])
      

  
      const updateStudentData = ()=>{
        // console.log(editID);
  //select and find our student
      const editStudents = studentsData.findIndex((stud)=>stud.id === editID )
  //we need the updated data
      const updatedStudents = {
        id,
        name,
        batch,
        gender,
        yearsofExperience: experience
      }
      //console.log(updatedStudents)
  //change the updated data in specific id 
      studentsData[editStudents] = updatedStudents;
  //set the students final data  
      // setStudentsData([...studentsData])
      setId("");
      setName("");
      setBatch("");
      setGender("");
      setExperience("");
      history.push('/students')
  
      }
  return (
    <Base  title = 'UPDATE STUDENTS DATA' description= 'Here you can Update the Students Data'>
         <div className='input-section'>
            {/* students {idx} {studID} */}
            <TextField fullWidth label="Enter the ID" id="fullWidth" onChange={(event)=>setId(event.target.value)} value={id}/>
            <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={(event)=>setName(event.target.value)} value={name}/>
            <TextField fullWidth label="Enter the Batch" id="fullWidth" onChange={(event)=>setBatch(event.target.value)} value={batch}/>
            <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={(event)=>setGender(event.target.value)} value={gender}/>
            <TextField fullWidth label="Enter the Experience" id="fullWidth" onChange={(event)=>setExperience(event.target.value)} value={experience}/><br/><br/>
            <Button variant="contained" color="secondary" onClick={updateStudentData}>Update Data</Button> :
            </div>
    </Base>
  )
}

export default UpdateData