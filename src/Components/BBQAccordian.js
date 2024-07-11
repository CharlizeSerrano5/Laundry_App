import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BarIcon from '../Assets/BarIcon.svg'

import { Grid } from '@mui/material';
import WeekdayBox from './WeekdayBox';
import AvailableButton from './AvailableButton';
import HomeAccordian from './HomeAccordian';
import React from 'react';
import BookingTabContext from './BookingTabContext';


function BBQAccordian() {
  const {accordianType, defineAccordianType} = React.useContext(BookingTabContext);
  
  return (
      // <HomeAccordian title={'BBQ Grill'} time={'10:30 PM'} primary={'#F97979'}>

      // </HomeAccordian>
        <Accordion style={{backgroundColor: '#F97979', borderRadius: '10px'}} onChange={() => {
          defineAccordianType('BBQ')
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={12}>
              <h2>BBQ Grill</h2>
            </Grid>
            <Grid item xs={12} textAlign={'left'}>
              <AvailableButton isAvailable={false} givenTime={'10:30 PM'}></AvailableButton>

            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <WeekdayBox icon={BarIcon}></WeekdayBox>
        </AccordionDetails>
      </Accordion>
    );
}

export default BBQAccordian;