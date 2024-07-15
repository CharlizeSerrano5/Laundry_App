import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Box, Button, Container, Stack } from "@mui/material";
import TimeContext from "./TimeContext";
import WeekdaySelectContext from './WeekdaySelectContext';
import BookingTabContext from './BookingTabContext';


function ConfirmButton({type}){
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
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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

    
    return (
        <Box className='ConfirmButton' style={{width: '100%'}}>

            <Stack spacing={1}>
                <Button style={type==='cancel'?cancelButtonStyle:confirmButtonStyle} onClick={() => {
                    handleOpen();
                }}>{type==='confirm'?'Confirm Completion': 'Cancel Booking'}</Button>
                <Button style={otherButtonStyle}>Report an Issue</Button>
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

                        <div>
                            <h2 className='ScheduleContent'>
                                {type==='confirm'?'Are you sure you want to confirm completion?': 'Are you sure you want to cancel your booking'}
                            </h2>
                        </div>
                        
                    
                        <Stack spacing={1}>
                            <Button style={confirmButtonStyle} onClick={()=>{
                                handleClose();
                            }}>
                                OK
                            </Button>
                            <Button style={otherButtonStyle}>
                                RESEND
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