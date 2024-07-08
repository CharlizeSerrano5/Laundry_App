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

export default function BookingTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Available Bookings" value="1" style={{fontSize: '14px',fontWeight: '600'}}/>
            <Tab label="Your Bookings" value="2" style={{fontSize: '14px',fontWeight: '600'}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <Stack spacing={2}>
            <WasherAccordian></WasherAccordian>
            <DryerAccordian></DryerAccordian>
            <ClubhouseAccordian></ClubhouseAccordian>
            <BBQAccordian></BBQAccordian>
          </Stack>
          
        </TabPanel>
        <TabPanel value="2">
          <h2>You haven't booked anything yet...</h2>
        </TabPanel>
      </TabContext>
    </Box>
  );
}