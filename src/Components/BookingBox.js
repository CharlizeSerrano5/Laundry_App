import { Box, Grid, Button } from "@mui/material";
import ConfirmButton from "./ConfirmButton";
function BookingBox({icon, number, weekday, day, time, type}) {
    const timeArr = time.split(':');
    console.log('day: ', day);
    const defaultStyle = {
        borderRadius: '5px',
        backgroundColor: '#D6D5DA',
        color: '#160449', 
        fontSize: '11px',
        padding: '2px',
        minWidth: '0px',
        fontWeight: '600'
    }
    let weekdayString
    if (weekday) {
        weekdayString = weekday.slice(0, 3);

    }
    return (
        <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
                <div>{weekdayString} {day} {time}</div>
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid item xs={2}>
                    <div className='imageNumberContainer'>
                        <img src={icon} className='imageNumber'></img>
                        <span className='imageText'>{number? number : ''}</span>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    {<ConfirmButton type={'cancel'} weekday={weekday} booking={type} day={day} time={time}></ConfirmButton>}
                </Grid>
                <Grid item xs={2}>
                    <Box style={defaultStyle}>
                        <Grid container spacing={0.5} style={{padding: '0px', width: '100%'}}>
                            <Grid item xs={12} style={{padding: '0px'}}>
                                60
                            </Grid>
                            <Grid item xs={12}>
                                min
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>          
    )
}
export default BookingBox;