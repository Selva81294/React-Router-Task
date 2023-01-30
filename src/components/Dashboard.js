import { Button } from "@mui/material";
import React from "react";
import Base from "../Base/Base";

const Dashboard = ()=>{
    return(
        <div>
            <Base title='Welcome to Students App' description='Please click the bellow button to navigate to home page'>
                <Button variant="outlined" color="primary" size = "large">
                    Home
                </Button>

            </Base>
        </div>
    )
}

export default Dashboard;