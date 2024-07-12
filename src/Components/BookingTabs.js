import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WasherAccordian from './WasherAccordian';
import DryerAccordian from './DryerAccordian';
import { Button, Container, Stack } from '@mui/material';
import ClubhouseAccordian from './ClubhouseAccordian';
import BBQAccordian from './BBQAccordian';
import BookingTabContext from './BookingTabContext';
import CenterContainer from './CenterContainer';
import NumberContext from './NumberContext'

import './BookingTabs.css'

let laundryId = 0;
let dryerId = 0;

export default function BookingTabs() {
  // const [tabValue, setValue] = React.useState('1'); // currently on the first one
  const {tabValue, setValue} = React.useContext(BookingTabContext);
  const [selectedNumber, setSelectedNumber] = React.useState('');

  const handleSelectedNumber = (number) => {
      setSelectedNumber(number);
      // Being passed into washer and dryer
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // save the washer as an object
  const [washerBooked, setWasherBooked] = React.useState({})
  const defineWasherBooked = (day, time) => {
    setWasherBooked({day,time})
  }
  const [dryerBooked, setDryerBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineDryerBooked = (day, time) => {
    setDryerBooked({day,time})
  }

  const [clubhouseBooked, setClubhouseBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineClubhouseBooked = (day, time) => {
    setClubhouseBooked({day,time})
  }

  const [BBQBooked, setBBQBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineBBQBooked = (day, time) => {
    setBBQBooked({day,time})
  }
  const [bookedDay, setBookedDay] = React.useState('');
  const [bookedTime, setBookedTime] = React.useState('');
  const [bookedType, setBookedType] = React.useState('');
  const [bookedNumber, setBookedNumber] = React.useState('');

  const [accordianType, setAccordianType] = React.useState('');
  const defineAccordianType = (type) => {
    setAccordianType(type);
  }
  
  const defineBookedDay = (day) => {
    setBookedDay(day)
  }

  const defineBookedTime = (time) => {
    setBookedTime(time)
  }

  const defineBookedType = (type) => {
    setBookedType(type)
  }

  const defineBookedNumber = (number) => {
    setBookedNumber(number)
  }

  // TODO: also define the exact washer
  const [washersBooked, setWashersBooked] = React.useState([])
  const countWashersBooked = (num) => {
    setWashersBooked([...washersBooked, {
      id: laundryId++, number: num}
    ]);
  }

  const [dryersBooked, setDryersBooked] = React.useState({
    dryers: [],
  })
  const countDryersBooked = (num) => {
    setDryersBooked({id: dryerId++,number: num})
  }

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
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="tab API">
            <Tab label="Available Bookings" value="1" style={{fontSize: '14px',fontWeight: '600', 
              backgroundColor: (tabValue === '1')? '#3D5CAC': '#160449', color: '#F2F2F2', borderRadius: '10px'}}/>
            <Tab label="Your Bookings" value="2" style={{fontSize: '14px',fontWeight: '600', 
              backgroundColor: (tabValue === '2')? '#3D5CAC': '#160449', color: '#F2F2F2', borderRadius: '10px'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
{/* TODO: fix the padding */}
          <Box marginBottom={'100px'}>
            <Stack spacing={2}>
              <BookingTabContext.Provider value={{
                defineBookedDay, defineBookedTime, defineBookedType, defineBookedNumber,
                BBQBooked, defineBBQBooked, 
                clubhouseBooked, defineClubhouseBooked,
                dryerBooked, defineDryerBooked,
                washerBooked, defineWasherBooked,
                accordianType, defineAccordianType,
                selectedNumber, handleSelectedNumber,
                washersBooked, countWashersBooked,
                }}>
                    <WasherAccordian></WasherAccordian>                  
                    <DryerAccordian></DryerAccordian>
                    <ClubhouseAccordian></ClubhouseAccordian>
                    <BBQAccordian></BBQAccordian>
              </BookingTabContext.Provider>
            </Stack>
          </Box>
          
          
        </TabPanel>
        <TabPanel value="2">
          <Box display={washerBooked.day||dryerBooked.day||clubhouseBooked.day||BBQBooked.day? 'none': 'block'}>
            <h2 className='NoBooking'>You haven't booked anything yet...</h2>
          </Box>
          {/* <div>Booked Day: {bookedDay}</div>
          <div>Booked Time: {bookedTime}</div> */}
          
          {/* TODO: Create separate components for every item (the box, the buttons)*/}
          <Box>
            <Stack spacing={2}>
              <Box style={{backgroundColor: '#79CBF9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={washerBooked.day?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    Washers
                  </h2>
                  <Stack spacing={2}>

                    {washersBooked.map((washerBooked) => (
                      <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
                        <div>{washerBooked.number.day} {washerBooked.number.time}</div>
                        <Stack spacing={1}>
                          <Button style={buttonStyle}>Start</Button>
                          <Button style={otherButtonStyle}>Report an Issue</Button>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>


                </Container>
                
              </Box>

              
              <Box style={{backgroundColor: '#7CEBDE', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={dryerBooked.day?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    Dryers
                  </h2>
                  <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
                    <div>{dryerBooked.day} {dryerBooked.time}</div>
                    <Stack spacing={1}>
                      <Button style={buttonStyle}>Confirm Completion</Button>
                      <Button style={otherButtonStyle}>Report an Issue</Button>
                    </Stack>
                  </Box>
                </Container>
                
              </Box>

              <Box style={{backgroundColor: '#D893F9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={clubhouseBooked.day?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    Clubhouse
                  </h2>
                  <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
                    <div>{clubhouseBooked.day} {clubhouseBooked.time}</div>
                    <Stack spacing={1}>
                      <Button style={buttonStyle}>Cancel Booking</Button>
                      <Button style={otherButtonStyle}>Report an Issue</Button>
                    </Stack>
                  </Box>
                </Container>
                
              </Box>

              <Box style={{backgroundColor: '#F97979', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={BBQBooked.day?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    BBQ Grill
                  </h2>
                  <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
                    <div>{BBQBooked.day} {BBQBooked.time}</div>
                    <Stack spacing={1}>
                      <Button style={buttonStyle}>Cancel Booking</Button>
                      <Button style={otherButtonStyle}>Report an Issue</Button>
                    </Stack>
                  </Box>
                </Container>
                
              </Box>

            </Stack>

          </Box>
        </TabPanel>
      </TabContext>


    </Box>
  );
}