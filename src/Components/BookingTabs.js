import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WasherAccordian from './WasherAccordian';
import DryerAccordian from './DryerAccordian';
import { Button, Container, Stack, Grid } from '@mui/material';
import ClubhouseAccordian from './ClubhouseAccordian';
import BBQAccordian from './BBQAccordian';
import BookingTabContext from './BookingTabContext';
import CenterContainer from './CenterContainer';
import LaundryIcon from '../Assets/DefaultLaundryIcon.svg'
import DryerIcon from '../Assets/DefaultDryerIcon.svg'
import ClubHouseIcon from '../Assets/ClubHouseIcon.svg'
import BBQIcon from '../Assets/BarIcon.svg'

import NumberContext from './NumberContext'

import './BookingTabs.css'
import ConfirmButton from './ConfirmButton';
import BookingBox from './BookingBox';

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
  const countWashersBooked = (newWasherBooking, id) => {
    setWashersBooked((prevWashers) => [
      ...prevWashers,
      { id: id, ...newWasherBooking }
  ]);
  }

  const removeWasherBooking = (id) => {
    setWashersBooked((prevWashers) => 
      prevWashers.filter((washer) => washer.id !== id)
    );
  };

  console.log('washersBOOKED, ', washersBooked)

  const [dryersBooked, setDryersBooked] = React.useState([])
  const countDryersBooked = (newDryerBooking) => {
    setDryersBooked((prevDryers) => [
      ...prevDryers,
      { id: laundryId++, ...newDryerBooking }
  ]);
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
                defineBookedDay, defineBookedTime, defineBookedType, defineBookedNumber, bookedTime,
                BBQBooked, defineBBQBooked, 
                clubhouseBooked, defineClubhouseBooked,
                dryerBooked, defineDryerBooked,
                washerBooked, defineWasherBooked,
                accordianType, defineAccordianType,
                selectedNumber, handleSelectedNumber,
                washersBooked, countWashersBooked, removeWasherBooking,
                dryersBooked, countDryersBooked,
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
          <BookingTabContext.Provider value={{
                removeWasherBooking,
                }}>
          <Box marginBottom={'100px'}>
            <Stack spacing={2}>
              <Box style={{backgroundColor: '#79CBF9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={washersBooked.length != 0 ?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    Washers
                  </h2>
                  <Stack spacing={2}>
                    {washersBooked.map((washerBooked) => (
                         <BookingBox icon={LaundryIcon} number={washerBooked.number} weekday={washerBooked.weekday} day={washerBooked.day} time={washerBooked.time} type={'Washer'}></BookingBox>
                    ))}
                  </Stack>
                </Container>
                
              </Box>

              
              <Box style={{backgroundColor: '#7CEBDE', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={dryerBooked.day?'block': 'none'}>
                <Container>
                <h2 className='BookingTitle'>
                    Dryers
                  </h2>
                  <Stack spacing={2}>

                    {dryersBooked.map((dryerBooked) => (                      
                      <BookingBox icon={DryerIcon} number={dryerBooked.number} weekday={dryerBooked.weekday} day={dryerBooked.day} time={dryerBooked.time} type={'Dryer'}></BookingBox>
                    ))}
                  </Stack>
                  </Container>
                
              </Box>

              <Box style={{backgroundColor: '#D893F9', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px'}} display={clubhouseBooked.day?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    Clubhouse
                  </h2>
                  <BookingBox icon={ClubHouseIcon} day={clubhouseBooked.day} time={clubhouseBooked.time} type={'Clubhouse'}></BookingBox>

                </Container>
                
              </Box>

              <Box style={{backgroundColor: '#F97979', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px', }} display={BBQBooked.day?'block': 'none'}>
                <Container>
                  <h2 className='BookingTitle'>
                    BBQ Grill
                  </h2>
                  <BookingBox icon={BBQIcon} day={BBQBooked.day} time={BBQBooked.time} type={'BBQ Grill'}></BookingBox>
                </Container>
                
              </Box>

            </Stack>

          </Box>
          </BookingTabContext.Provider>
        </TabPanel>
      </TabContext>


    </Box>
  );
}