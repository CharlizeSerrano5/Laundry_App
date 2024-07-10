import React from 'react'
import { Box, Container, Stack } from '@mui/material';
import BookingTabs from './BookingTabs';
import BookingTabContext from './BookingTabContext';


function CenterContainer() {
    const [tabValue, setValue] = React.useState('1'); // currently on the first one
    let title;
    if (tabValue === '1'){
        title = 'SELECT A SERVICE & DATE'
    } else if (tabValue === '2'){
        title = 'MANAGE YOUR BOOKINGS'
    }
    
    return (
    <div className="CenterContainer">
      <Container>
        <Box style={{backgroundColor: '#F2F2F2', padding: '20px', marginTop: '15px', borderRadius: '10px'}}>
          <Stack spacing={3}>
            <h2 className='ServiceSelect'>
              {title}
            </h2>
            <BookingTabContext.Provider value = {{tabValue, setValue}}>
                <BookingTabs></BookingTabs>
            </BookingTabContext.Provider>

          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default CenterContainer;
