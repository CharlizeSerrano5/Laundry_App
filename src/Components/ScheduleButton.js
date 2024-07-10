import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Box, Button, Container } from "@mui/material";
import TimeContext from "./TimeContext";
import WeekdaySelectContext from './WeekdaySelectContext';
function ScheduleButton(){
    const {selectedTime} = React.useContext(TimeContext)
    // set a state for if its a available and if its not available
    const {selectedDay, selectedWeekday} = React.useContext(WeekdaySelectContext)
    // TODO: create a context for weekday
    // const {selectedWeekday} = React.useContext(WeekdaySelectContext); 

    //TODO: passing whatever has been selected as a booking
    //TODO: - possible logic to set up: initialize the states in the booking tabs fix all the current states to start there
    const [booking, setBooking] = React.useState('');


    // Obtained from MUI
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
    // use a modal

    const weekArr = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const weekDay = weekArr[selectedWeekday]

    const disabledStyle = {
        backgroundColor: '#B3B3B3',
        color: '#33235F',
        padding: '5px', 
        display: 'inline', 
        borderRadius: '5px', 
        width: '100%', 
        justifyContent: 'center'
    }
    const enabledStyle = {
        backgroundColor: '#3D5CAC', 
        padding: '5px', 
        display: 'inline',
        width: '100%', 
        borderRadius: '5px', 
        justifyContent: 'center'
    }
    // if there exists a selectedTime
    

    // TODO: Increase time by an hour 
    const timeArr = selectedTime.split(':');
    // first item in this time array should be changed to a number
    let tempHour = Number(timeArr[0]);
    // Add 1 hour
    tempHour += 1;
    // if (tempHour >) 
    const year = new Date().getFullYear();
    // console.log(timeArr)
    return (
        <Container>
            <Button disabled={selectedTime? false: true} style={selectedTime? enabledStyle:disabledStyle } onClick={(event) => {
                console.log('selectedTime: ', selectedTime)
                console.log('selectedWeekday: ', weekDay)

                handleOpen();
                console.log('selectedDATE: ', selectedDay, selectedTime)

            }}>
                <h3>Schedule</h3>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container>
                <Box sx={style} alignItems={'center'}>
                    <h2 className='ScheduleContent'>
                        You have scheduled a booking for
                    </h2>
                    <h2 className='ScheduleContent'>
                        Washing Machine #1 
                        {/* (change to number later) */}
                    </h2 >
                    <h2 className='ScheduleContent'>
                        {/* tempdate:  */}
                        {`${weekDay}, ${selectedDay}/${year}`}
                    </h2>
                    <h2 className='ScheduleContent'>
                        from
                    </h2>
                    <h2 className='ScheduleContent'>
                        {selectedTime} to (hourlater)
                    </h2>
                    <h2 className='ScheduleContent'>
                        A confirmation text has been sent to
                    </h2>
                    <h2 className='ScheduleContent'>
                        (123)-456-7890
                    </h2>
                    <Button onClick={()=>{
                        handleClose();
                    }}>
                        <h2>OK</h2>
                        {/* TODO: when you select okay then save the information */}
                    </Button>
                    <Button>
                        <h2>RESEND</h2>
                    </Button>
                </Box>
                </Container>

            </Modal>
            

        </Container>
        
    )
}

export default ScheduleButton;