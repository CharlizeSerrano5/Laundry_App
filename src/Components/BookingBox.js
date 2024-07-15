import { Box, Grid } from "@mui/material";
import ConfirmButton from "./ConfirmButton";
function BookingBox({icon, number, day, time}) {
    const timeArr = time.split(':');
    console.log('day: ', day);
    return (
        <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
            <div>{day} {time}</div>
            <Grid container spacing={1} justifyContent={'center'}>
                <Grid item xs={2}>
                    <div className='imageNumberContainer'>
                        <img src={icon} className='imageNumber'></img>
                        <span className='imageText'>{number? number : ''}</span>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <ConfirmButton type={'confirm'}></ConfirmButton>
                </Grid>
                <Grid item xs={2}>
                    <div className='imageNumberContainer'>
                        <img src={icon} className='imageNumber'></img>
                        <span className='imageText'>{number? number : ''}</span>
                    </div>
                </Grid>
            </Grid>
        </Box>          
    )
}
export default BookingBox;