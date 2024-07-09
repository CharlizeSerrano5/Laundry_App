import React from 'react';
import { Box, Button, Grid, Container, Stack } from "@mui/material";
import ScheduleButton from './ScheduleButton';
function TimesGrid() {
    // var currentDate = new window.Date(Year, Month-1, Date);
    var currentDate = new window.Date(); // setting up a default time
    currentDate.setHours(0, 0, 0, 0)
    // console.log('currentDate: ', currentDate);
    // set currentDate time to 12:00
    // push onto an array 44 times
    
    // const [selectState, setSelectState] = React.useState(false);
    // function handleSelectState () {
        
    // }

    const availableTimes = [];

    
    for (let i = 0; i < 44; i++){
        let tempTime = new window.Date(currentDate.getTime() + 30 * 60000 * i); // 30 minutes in milliseconds
        const hourCheck = Number(tempTime.getHours());
        let hourString;
        let AMPMString;
        if (hourCheck === 0){
            hourString = 12;
            AMPMString = 'AM';
        } else if ((hourCheck - 12) === 0){
            // time is also 12
            hourString = 12;
            AMPMString = 'PM';
        } else if ((hourCheck - 12) > 0){
            // overtime of 12
            hourString = hourCheck - 12;
            AMPMString = 'PM';
        }
        else {
            AMPMString = 'AM';
            hourString =`${hourCheck}`
        }
        const minuteString = `${tempTime.getMinutes()}`.toString().padStart(2, '0');
        const timeString = `${hourString}:${minuteString} ${AMPMString}`;
        availableTimes.push(timeString);
    }
        return (
            <div>
                <Stack spacing={1}>
                    <Grid container spacing={1}>
                    {availableTimes.map((timeString)=> (
                        <Grid item xs={3} key={timeString}>
                            {/* TODO: add an enabled and disabled time button */}
                        <Button style={{backgroundColor: '#D6D5DA', color: '#160449', fontSize: '11px', 
                        padding: '2px', minWidth: '0px', fontWeight: '600'}} onClick={() => {
                                }}>
                            {timeString}
                        </Button>    
                            </Grid>
                    ))}
                    </Grid>
                    <ScheduleButton></ScheduleButton>
                </Stack>
                
            </div>
            

        )
    }
export default TimesGrid;