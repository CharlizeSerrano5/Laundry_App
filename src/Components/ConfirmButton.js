import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Box, Button, Container, Stack } from "@mui/material";
import TimeContext from "./TimeContext";
import WeekdaySelectContext from './WeekdaySelectContext';
// import BookingTabContext from './BookingTabContext';
import BookingTabContext from './BookingTabContext';

function ConfirmButton({type, booking, day, time, weekday, number}){
    const {removeWasherBooking} = React.useContext(BookingTabContext);
    const confirmButtonStyle={
        backgroundColor: '#76B148',
        display: 'inline', 
        borderRadius: '5px',
        padding: '5px', 
        width: '100%', 
        justifyContent: 'center',
        color: 'white',
    }
    const cancelButtonStyle={
        backgroundColor: '#160449',
        display: 'inline', 
        borderRadius: '5px',
        padding: '5px', 
        width: '100%', 
        justifyContent: 'center',
        color: 'white',
    }
    const otherButtonStyle={
        backgroundColor: '#A52A2A',
        display: 'inline', 
        borderRadius: '5px',
        padding: '5px', 
        width: '100%', 
        justifyContent: 'center',
        color: 'white',
    }
    const circleStyle={
        borderRadius: '50%',
        backgroundColor: '#D6D5DA',
        color: '#160449', 
        fontSize: '11px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        display: 'inline',
        fontWeight: '600'
    }
    const innerCircleStyle={
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        color: '#160449', 
        fontSize: '11px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center',
        display: 'inline',
        fontWeight: '600'
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    return (
        <Box className='ConfirmButton' style={{width: '100%'}}>

            <Stack spacing={1}>
                <Button style={type==='cancel'?cancelButtonStyle:confirmButtonStyle} onClick={() => {
                    if (type === 'cancel' || type === 'confirm'){
                        handleOpen();
                    }
                }}>
                    <Typography textTransform={'none'}>
                        {type==='confirm'?'Confirm Completion': 
                        type === 'cancel' ? 'Cancel Booking' :
                        'Start'}
                    </Typography>
                </Button>
                <Button style={otherButtonStyle}>
                    <Typography textTransform={'none'}>Report an Issue</Typography>
                </Button>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
            <Container>
                <Box sx={style} alignItems={'center'} style={{borderRadius: '10px'}}>
                    <Stack spacing={3}>

                            {type==='cancel'?
                                <Stack spacing={2} justifyContent={'center'}>

                                    <h2 className='ScheduleContent'>
                                        Are you sure you want to cancel booking for the {booking} on
                                    </h2>
                                    <div>
                                        <h2 className='ScheduleContent ScheduleImportant'>
                                            {weekday} {day}
                                        </h2>
                                        <h2 className='ScheduleContent'>
                                            from
                                        </h2>
                                        <h2 className='ScheduleContent ScheduleImportant'>
                                            {time}
                                        </h2>
                                    </div>
                                </Stack>
                                
                            :
                            <Stack spacing={2} justifyContent={'center'}>

                                <h2 className='ScheduleContent'>
                                    Are you sure you want to confirm completion?
                                </h2>
                                <h2 className='ScheduleContent'>
                                    It looks like there is still
                                </h2>
                                <div>
                                    <Box style={circleStyle}>
                                        <Box style={innerCircleStyle}>
                                            64
                                        </Box>
                                    </Box>
                                </div>
                                <h2 className='ScheduleContent'>
                                    left on your {booking}.
                                </h2>
                            </Stack>
                            }
                        
                    
                        <Stack spacing={1}>
                            <Button style={confirmButtonStyle} onClick={()=>{
                                handleClose();
                                // TODO: remove item from array
                                if (booking ==='Washer') {
                                    console.log('number removed: ', number);
                                    removeWasherBooking(number);
                                }
                            }}>
                                <Typography textTransform={'none'}>
                                    {type==='confirm'? 'Yes, I want to confirm completion':
                                        'Yes, I want to cancel booking'
                                    }
                            </Typography>
                            </Button>
                            <Button style={otherButtonStyle} onClick={() => {
                                handleClose()
                            }}>
                                <Typography textTransform={'none'}>Nevermind</Typography>
                            </Button>
                        </Stack>
                                
                        
                    </Stack>
                    
                </Box>
            </Container>

            </Modal>
        </Box>



    )
}
export default ConfirmButton;