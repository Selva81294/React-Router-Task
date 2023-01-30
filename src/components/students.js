import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';

export function Studentdetails({studentsData,setStudentsData}){
    const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("username")){
      history.replace('/register')
    }
  }, [])
  

//Delete Function
    const deleteStudentData = (studID)=>{
        const requiredStudents = studentsData.filter((stud)=> stud.id !== studID);
        setStudentsData(requiredStudents);
    }
   
    return(
      <Base title='Batch Details' description='All students details'> 
        <div className='containers'>
            
            <div className='card-containers'>
            {studentsData.map((stud,idx)=>(
            <Card sx={{ maxWidth: 345 }} key={stud.id}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {stud.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Batch: {stud.batch}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gender: {stud.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience: {stud.yearsofExperience} years
                  </Typography>
                </CardContent>
                <Button  onClick={()=>{history.push(`/edit/${idx}/${stud.id}`)}} variant="contained" color="success">Edit</Button> {" "}
                <Button onClick={()=>deleteStudentData(stud.id)} variant="contained" color="success">Delete</Button> {" "}
                <Button onClick={()=>history.push(`/student/${idx}`)} variant="contained" color="success">View</Button><br/><br/>
              </Card>
              ))}
        </div>
        </div>
        </Base>
    )
}


