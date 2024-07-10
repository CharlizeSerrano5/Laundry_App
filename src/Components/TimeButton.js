import React from 'react';
import { Box, Button, Grid, Container, Stack } from "@mui/material";
import TimeContext from './TimeContext';
function TimeButton({timeString}) {
    const {selectedTime, defineSelectedTime} = React.useContext(TimeContext);

    const [selectTime, setSelectTime] = React.useState(false);

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
        <Button style={selectedTime===timeString? selectedStyle: defaultStyle} onClick={() => {
                if (selectedTime===timeString){
                    defineSelectedTime('');
                } else {
                    defineSelectedTime(timeString)
                }
            }}>
            {timeString}
        </Button>    
    )
}
export default TimeButton;
