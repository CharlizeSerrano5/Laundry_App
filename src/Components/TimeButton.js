import React from 'react';
import { Box, Button, Grid, Container, Stack } from "@mui/material";
import TimeContext from './TimeContext';
function TimeButton({timeString}) {
    // const [selectedTime] = React.useContext(TimeContext);

    const [selectTime, setSelectTime] = React.useState(false);
    function handleSelectTime (isSelected) {
        setSelectTime(isSelected);
    }

    const defaultStyle = {
        backgroundColor: '#D6D5DA', 
        color: '#160449', 
        fontSize: '11px', 
        padding: '2px', 
        minWidth: '0px', 
        fontWeight: '600'
    }
    
    const selectedStyle = {
        backgroundColor: '#160449', 
        color: 'white', 
        fontSize: '11px', 
        padding: '2px', 
        minWidth: '0px', 
        fontWeight: '600'
    }
    
    return (
            
        <Button style={selectTime? selectedStyle: defaultStyle} onClick={() => {
                handleSelectTime(true);
            }}>
            {timeString}
        </Button>    
    )
}
export default TimeButton;
