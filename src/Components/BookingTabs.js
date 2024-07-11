import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WasherAccordian from './WasherAccordian';
import DryerAccordian from './DryerAccordian';
import { Stack } from '@mui/material';
import ClubhouseAccordian from './ClubhouseAccordian';
import BBQAccordian from './BBQAccordian';
import BookingTabContext from './BookingTabContext';
import AccordianTypeContext from './AccordianTypeContext';
import CenterContainer from './CenterContainer';

import DryerContext from './DryerContext'
import WasherContext from './WasherContext'
import ClubhouseContext from './ClubhouseContext'
import BBQContext from './BBQContext'



export default function BookingTabs() {
  // const [tabValue, setValue] = React.useState('1'); // currently on the first one
  const {tabValue, setValue} = React.useContext(BookingTabContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // save the washer as an object
  const [washerBooked, setWasherBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineWasherBooked = (day, time) => {
    setWasherBooked({
      day,
      time
    })
  }


  const [dryerBooked, setDryerBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineDryerBooked = (day, time) => {
    setDryerBooked({
      day,
      time
    })
  }

  const [clubhouseBooked, setClubhouseBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineClubhouseBooked = (day, time) => {
    setClubhouseBooked({
      day,
      time
    })
  }

  const [BBQBooked, setBBQBooked] = React.useState({
    day: '',
    time: '',
  })
  const defineBBQBooked = (day, time) => {
    setBBQBooked({
      day,
      time
    })
  }
  
  const [bookedDay, setBookedDay] = React.useState('');
  const [bookedTime, setBookedTime] = React.useState('');
  const [bookedType, setBookedType] = React.useState('');
  
  const [accordianType, setAccordianType] = React.useState('');
  const defineAccordianType = (type) => {
    setAccordianType(type);
  }

  // TODO: set up a booking type (ex: laundry, grill, etc.)

  const defineBookedDay = (day) => {
    setBookedDay(day)
  }

  const defineBookedTime = (time) => {
    setBookedTime(time)
  }

  const defineBookedType = (type) => {
    setBookedType(type)
  }

  // TODO: also define the exact washer or type

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
              <BookingTabContext.Provider value={{defineBookedDay, defineBookedTime, defineBookedType}}>
                <AccordianTypeContext.Provider value={{accordianType, defineAccordianType}}>
                  <WasherContext.Provider value={{washerBooked, defineWasherBooked}}>
                    <DryerContext.Provider value = {{dryerBooked, defineDryerBooked}}>
                      <ClubhouseContext.Provider value = {{clubhouseBooked, defineClubhouseBooked}}>
                        <BBQContext.Provider value = {{BBQBooked, defineBBQBooked}}>
                          <WasherAccordian></WasherAccordian>                  
                          <DryerAccordian></DryerAccordian>
                          <ClubhouseAccordian></ClubhouseAccordian>
                          <BBQAccordian></BBQAccordian>
                        </BBQContext.Provider>
                      </ClubhouseContext.Provider>
                    </DryerContext.Provider>
                    
                  </WasherContext.Provider>

                </AccordianTypeContext.Provider>
                
              </BookingTabContext.Provider>
              
            </Stack>
          </Box>
          
          
        </TabPanel>
        <TabPanel value="2">
          {/* Create the components for what has been booked */}
          {/* if it hasnt been booked yet show this */}

          <h2>You haven't booked anything yet...</h2>
          <div>Booked Day: {bookedDay}</div>
          <div>Booked Time: {bookedTime}</div>
          
          <Box>
            <div>washer: {washerBooked.day} {washerBooked.time}</div>
            <div>dryer: {dryerBooked.day} {dryerBooked.time}</div>
            <div>clubhouse: {clubhouseBooked.day} {clubhouseBooked.time}</div>
            <div>BBQ: {BBQBooked.day} {BBQBooked.time}</div>

          </Box>
        </TabPanel>
      </TabContext>


    </Box>
  );
}