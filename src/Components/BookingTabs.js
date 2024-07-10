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
import CenterContainer from './CenterContainer';

export default function BookingTabs() {
  // const [tabValue, setValue] = React.useState('1'); // currently on the first one
  const {tabValue, setValue} = React.useContext(BookingTabContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <WasherAccordian></WasherAccordian>
              <DryerAccordian></DryerAccordian>
              <ClubhouseAccordian></ClubhouseAccordian>
              <BBQAccordian></BBQAccordian>
            </Stack>
          </Box>
          
          
        </TabPanel>
        <TabPanel value="2">
          <h2>You haven't booked anything yet...</h2>
        </TabPanel>
      </TabContext>


    </Box>
  );
}