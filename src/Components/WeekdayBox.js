import React from 'react'
import WeekdayButton from './WeekdayButton';
import LaundryIcon from '../Assets/LaundryIcon.svg'
import { Grid, Stack, Box } from '@mui/material';
import TimesGrid from './TimesGrid';
import WeekdaySelectContext from './WeekdaySelectContext';
import BookingTabContext from './BookingTabContext';
import './WeekdayBox.css'
function WeekdayBox({icon, number}){
    const currentDate = new Date();
    const currWeek = [];

    // from WeekdayBox
    const [weekdaySelect, setWeekdaySelect] = React.useState('false');
    const [selectedDay, setSelectedDay] = React.useState('');
    const [selectedWeekday, setSelectedWeekday] = React.useState('');
    const {handleSelectedNumber} = React.useContext(BookingTabContext);

    const handleSelectedWeekday = (weekday) => {
        setSelectedWeekday(weekday);
        // Being passed into WeekdayButton
    }

    const handleSelectedDay = (weekday) => {
        setSelectedDay(weekday);
        // Being passed into WeekdayButton
    }

    // console.log('currentDate', currentDate);
    let tempDate = currentDate;
    for (let i = 0; i < 7; i++){
      // Push onto the week array 7 times
      let tempDate = new Date(currentDate);
      tempDate.setDate(currentDate.getDate() + i);
      currWeek.push(tempDate);
    //   console.log('tempDate: ', tempDate);
    }

    return (
        <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="stretch"
                    container
                    spacing={0.5}
                    padding={'0px'}
                >
                    {/* TODO: When mapping also check if the item is out of order, create an array  */}
                    <div className='imageNumberContainer'>
                        <img src={icon} className='imageNumber'></img>
                        <span className='imageText'>{number}</span>
                    </div>
                    {currWeek.map((weekday) => (
                            <WeekdaySelectContext.Provider key={weekday} value={{selectedDay, handleSelectedDay, handleSelectedWeekday, selectedWeekday}}>
                                <WeekdayButton key={`${weekday.getDay()}`} WeekDay={weekday.getDay()} Month={weekday.getMonth()+1} Date={weekday.getDate()}
                                Year={weekday.getFullYear()} Number={number}></WeekdayButton>
                            </WeekdaySelectContext.Provider>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                    Available Until 5 PM
                </Grid>
                <Box 
                    display={selectedDay?'block': 'none'}
                    >
                    {/* TODO: Times grid will have a parameter that will check which day has been selected */}
                    <WeekdaySelectContext.Provider value= {{selectedDay, selectedWeekday}}>
                        <TimesGrid></TimesGrid>
                    </WeekdaySelectContext.Provider>

                </Box>
                
            </Grid>
          </Box>
    )
}

export default WeekdayBox;