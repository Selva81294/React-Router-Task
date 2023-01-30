import React from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base'

const SelectedStudent = ({studentsData}) => {
    const {id} = useParams();
    const student = studentsData[id]
  return (
    <Base title = 'Individual Student Details'>
        <div>
            <h2>Name: {student.name}</h2>
            <h4>Batch: {student.batch}</h4>
            <h4>Gender: {student.gender}</h4>
            <h4>Experience: {student.yearsofExperience} years</h4>
        </div>
    </Base>
  )
}

export default SelectedStudent