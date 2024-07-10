import React from 'react';
import { Button, Grid } from "@mui/material";
import './WeekdayButton.css'
import WeekdaySelectContext from './WeekdaySelectContext';
export default function({WeekDay, Month, Date, Year}){
    const weekArr = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const {selectedDay, handleSelectedDay, handleSelectedWeekday, selectedWeekday} = React.useContext(WeekdaySelectContext);
    
    // previous printTimes was here

    const selectStyle = {
        borderRadius: '5px',
        backgroundColor: '#160449',
        color: 'white', 
        fontSize: '11px',
        padding: '2px',
        minWidth: '0px',
        fontWeight: '600'
    }

    const defaultStyle = {
        borderRadius: '5px',
        backgroundColor: '#D6D5DA',
        color: '#160449', 
        fontSize: '11px',
        padding: '2px',
        minWidth: '0px',
        fontWeight: '600'
    }
    
    // TODO: for future logic create an array of ONLY the unavailable times and pass that in a state
    // that will get passed onto the grid and override it
    
    const dateString = `${Month}/${Date}`

    return (
        <div>
        <div className="WeekdayButton">
            <Button style={(dateString === selectedDay)? selectStyle:defaultStyle} onClick={() => {
                if (dateString===selectedDay){
                    handleSelectedDay('');
                    handleSelectedWeekday('');
                } else {
                    handleSelectedDay(dateString)
                    handleSelectedWeekday(WeekDay);
                }
                // handleSelectedDay(dateString);
            }}>
                <Grid container spacing={0.5} style={{padding: '0px', width: '100%'}}>
                    <Grid item xs={12} style={{padding: '0px'}}>
                        {weekArr[WeekDay]}
                    </Grid>
                    <Grid item xs={12}>
                        {dateString}
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