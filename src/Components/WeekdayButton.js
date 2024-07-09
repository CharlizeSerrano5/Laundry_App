import React from 'react';
import { Box, Button, Grid, Container } from "@mui/material";
import './WeekdayButton.css'
export default function({WeekDay, Month, Date, Year}){
    const weekArr = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const [weekdaySelect, setWeekdaySelect] = React.useState(false);
    
    // console.log(availableTimes);

    const handleWeekdaySelect = () => {
        setWeekdaySelect(true);
        // console.log('selected');
    }
    
    function printTimes () {
        var currentDate = new window.Date(Year, Month-1, Date);
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
                <Grid container spacing={1}>
                    {availableTimes.map((timeString)=> (
                        <Grid item xs={3} key={timeString}>
                        <Button style={{backgroundColor: '#D6D5DA', color: '#160449', fontSize: '11px', 
                        padding: '2px', minWidth: '0px', fontWeight: '600'}} onClick={() => {
                                }}>
                            {timeString}
                        </Button>    
                            </Grid>
                    ))}
                </Grid>
    
            )
        } 
        
    return (
        <div>
        <div className="WeekdayButton">
            <Button style={{borderRadius: '5px', backgroundColor: '#D6D5DA', color: '#160449', 
            fontSize: '11px', padding: '2px', minWidth: '0px', fontWeight: '600'}} onClick={() => {
                handleWeekdaySelect();
            }}>
                <Grid container spacing={0.5} style={{padding: '0px', width: '100%'}}>
                    <Grid item xs={12} style={{padding: '0px'}}>
                        {weekArr[WeekDay]}
                    </Grid>
                    <Grid item xs={12}>
                        {`${Month}/${Date}`}
                    </Grid>
                </Grid>
            </Button>
        </div>

        {/* essentially the times grid - to be removed */}
        {/* <Box display={weekdaySelect?'block': 'none'}>
        {printTimes()}</Box> */}
    </div>
    )
};