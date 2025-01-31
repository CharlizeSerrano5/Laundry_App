import React from 'react'
import WeekdayButton from './WeekdayButton';
import LaundryIcon from '../Assets/LaundryIcon.svg'
import { Grid, Stack, Box } from '@mui/material';
import TimesGrid from './TimesGrid';
function SelectWeekday(){
    const currentDate = new Date();
    const currWeek = [];

    const [weekdaySelect, setWeekdaySelect] = React.useState(false);
    
    const handleWeekdaySelect = (isSelect) => {
        setWeekdaySelect(isSelect);
        // console.log('selected');
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
                    <img src={LaundryIcon}></img>
                    {currWeek.map((weekday) => (
                        <div onClick={() => {
                            handleWeekdaySelect(true);
                        }}>
                            <WeekdayButton key={`${weekday.getDay()}`} WeekDay={weekday.getDay()} Month={weekday.getMonth()+1} Date={weekday.getDate()}
                            Year={weekday.getFullYear()}></WeekdayButton>
                        </div>
                        
                        
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                    Available Until 5 PM
                </Grid>
                <Box 
                display={weekdaySelect?'block': 'none'}
                >
                    <TimesGrid></TimesGrid>

                </Box>
                
            </Grid>
          </Box>
    )
}

export default SelectWeekday;