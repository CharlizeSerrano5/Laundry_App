import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Box, Button, Container, Stack } from "@mui/material";
import TimeContext from "./TimeContext";
import WeekdaySelectContext from './WeekdaySelectContext';
import BookingTabContext from './BookingTabContext';
import AccordianTypeContext from './AccordianTypeContext';



import './ScheduleButton.css'


function ScheduleButton(){
    const {selectedTime} = React.useContext(TimeContext)
    // set a state for if its a available and if its not available
    const {selectedDay, selectedWeekday} = React.useContext(WeekdaySelectContext)
    // check the accordianType
    const {accordianType}= React.useContext(AccordianTypeContext);
    const {washerBooked, defineWasherBooked} = React.useContext(BookingTabContext);
    const {dryerBooked, defineDryerBooked} = React.useContext(BookingTabContext);
    const {clubhouseBooked, defineClubhouseBooked} = React.useContext(BookingTabContext);
    const {BBQBooked, defineBBQBooked} = React.useContext(BookingTabContext);

    const [booking, setBooking] = React.useState('');

    const {defineBookedDay, defineBookedTime} = React.useContext(BookingTabContext);

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
        justifyContent: 'center',
        fontFamily: 'Source Sans 3',
        fontWeight: '700',
        fontStyle: 'normal',
    }
    const enabledStyle = {
        backgroundColor: '#3D5CAC', 
        padding: '5px', 
        display: 'inline',
        width: '100%', 
        borderRadius: '5px', 
        justifyContent: 'center',
        fontFamily: 'Source Sans 3',
        fontWeight: '700',
        fontStyle: 'normal',
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


    const buttonStyle={
        backgroundColor: '#76B148',
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
                <Box sx={style} alignItems={'center'} style={{borderRadius: '10px'}}>
                    <Stack spacing={3}>

                        <div>
                            <h2 className='ScheduleContent'>
                                You have scheduled a booking for
                            </h2>
                        </div>
                        <div>
                            <h2 className='ScheduleContent ScheduleImportant'>
                                {accordianType === 'Washer'? 'Washing Machine #1'
                                : accordianType === 'Dryer'? 'Drying Machine #1'
                                : accordianType === 'Clubhouse'? 'Clubhouse'
                                : accordianType === 'BBQ'? 'BBQ Grill' : ''
                                }
                                {/* (change to number later) */}
                            </h2 >
                            <h2 className='ScheduleContent'>
                                on
                            </h2>
                            <h2 className='ScheduleContent ScheduleImportant'>
                                {/* tempdate:  */}
                                {`${weekDay}, ${selectedDay}/${year}`}
                            </h2>
                            <h2 className='ScheduleContent'>
                                from
                            </h2>
                            <h2 className='ScheduleContent ScheduleImportant'>
                                {selectedTime} to (hourlater)
                            </h2>
                        </div>
                        <div>
                            <h2 className='ScheduleContent'>
                                A confirmation text has been sent to
                            </h2>
                            <h2 className='ScheduleContent ScheduleImportant'>
                                (123) 456-7890
                            </h2>
                        </div>
                    
                        <Stack spacing={1}>
                            <Button style={buttonStyle} onClick={()=>{
                                handleClose();
                                defineBookedDay(selectedDay);
                                defineBookedTime(selectedTime);
                                if (accordianType === 'Washer'){
                                    defineWasherBooked(selectedDay,selectedTime)
                                }
                                if (accordianType === 'Dryer'){
                                    defineDryerBooked(selectedDay,selectedTime)
                                }
                                if (accordianType === 'Clubhouse'){
                                    defineClubhouseBooked(selectedDay,selectedTime)
                                }
                                if (accordianType === 'BBQ'){
                                    defineBBQBooked(selectedDay,selectedTime)
                                }
                            }}>
                                OK
                                {/* TODO: when you select okay then save the information */}
                            </Button>
                            <Button style={otherButtonStyle}>
                                RESEND
                            </Button>
                        </Stack>
                                
                        
                    </Stack>
                    
                </Box>
            </Container>

            </Modal>
            

        </Container>
        
    )
}

export default ScheduleButton;