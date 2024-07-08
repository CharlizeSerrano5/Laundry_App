import React from 'react';
import { Box, Button, Grid, Container } from "@mui/material";
import './WeekdayButton.css'
export default function({WeekDay, Month, Date, Year}){
    const weekArr = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const [weekdaySelect, setWeekdaySelect] = React.useState(false);
    var currentDate = new window.Date(Year, Month-1, Date);
    currentDate.setHours(12, 0, 0, 0)
    console.log('currentDate: ', currentDate);
    // set currentDate time to 12:00
    // push onto an array 44 times
    const availableTimes = [];
    let tempTime = currentDate;
    for (let i = 0; i < 43; i++){
        let tempTime = new window.Date(currentDate.getTime() + 30 * 60000 * i); // 30 minutes in milliseconds
        availableTimes.push(tempTime);
        console.log('tempTime: ', `${tempTime.getHours()}:${tempTime.getMinutes()}`);
    }
    console.log(availableTimes);

    const handleWeekdaySelect = () => {
        setWeekdaySelect(true);
        console.log('selected');
    }

    return (
        <div>
        <div className="WeekdayButton">
            <Box>
                <Button style={{color: '#160449', fontSize: '11px', padding: '2px', minWidth: '0px', fontWeight: '600'}} onClick={() => {
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
            </Box>
        </div>
    <Grid container spacing={1}>
        {availableTimes.map((time)=> (
            <Grid item xs={1}>{time.getHours()}</Grid>
        ))}
    </Grid>
    </div>
    )
};