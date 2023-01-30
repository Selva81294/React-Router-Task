import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import { authData } from "./authData";

const AuthPage =  () => {
    const [data,setData] = useState(authData)
    const [loginName,setLoginName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const history = useHistory();
const loginStudents = ()=>{
    if(loginName === data[0].name && password === data[0].password){
        localStorage.setItem("username", loginName)
        setError(false)
        history.push('/studentsData')
    }
    else{
        setError(true)
    }
}

    return(
        <div>
            <Base title = 'Please Login or Signup' description = 'Authentication Page'>
                <div>
                    <TextField
                        id="outlined-text-input"
                        label="UserName"
                        type="text" onChange={(e)=>setLoginName(e.target.value)} value = {loginName}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password" onChange={(e)=>setPassword(e.target.value)} value = {password}
                    /> <br/><br/>
                    <Button onClick={loginStudents} variant="outlined" size="small">Login</Button>
                    {error ?
                    <Typography>Wrong Credentials</Typography> : ""}
                </div>
            </Base>
        </div>
    )
}

export default AuthPage;