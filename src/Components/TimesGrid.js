import React from 'react';
import { Box, Button, Grid, Container, Stack } from "@mui/material";
import ScheduleButton from './ScheduleButton';
import TimeButton from './TimeButton';
import TimeContext from './TimeContext';
import WeekdaySelectContext from './WeekdaySelectContext';
function TimesGrid() {
    // var currentDate = new window.Date(Year, Month-1, Date);
    var currentDate = new window.Date(); // setting up a default time
    currentDate.setHours(0, 0, 0, 0)
    // console.log('currentDate: ', currentDate);
    // set currentDate time to 12:00
    // push onto an array 44 times
    
    const {selectedDay, selectedWeekday} = React.useContext(WeekdaySelectContext);
    const [selectedTime, setSelectedTime] = React.useState('');

    function defineSelectedTime (time) {
        setSelectedTime(time);
        console.log('is being defined: ', time)
    }

    // Required for mapping
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
                            <TimeContext.Provider value = {{selectedTime, defineSelectedTime}}>
                                <TimeButton timeString={timeString}></TimeButton>
                            </TimeContext.Provider>
                        </Grid>
                    ))}
                    </Grid>
                    <WeekdaySelectContext.Provider value={{selectedDay, selectedWeekday}}>
                        <TimeContext.Provider value={{selectedTime}}>
                            {/* TODO: schedule the time */}
                            <ScheduleButton></ScheduleButton>

                        </TimeContext.Provider>
                    </WeekdaySelectContext.Provider>
                    
                </Stack>
                
            </div>
            

        )
    }
export default TimesGrid;