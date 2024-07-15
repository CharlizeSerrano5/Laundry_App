import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import WeekdayButton from './WeekdayButton';
import { Grid, Stack, Box } from '@mui/material';
import WeekdayBox from './WeekdayBox';
import AvailableButton from './AvailableButton';
import TimesGrid from './TimesGrid'
import DryerIcon from '../Assets/DefaultDryerIcon.svg'
import BookingTabContext from './BookingTabContext';
import React from 'react';


function DryerAccordian() {
  // Define the original accordian type
  const {accordianType, defineAccordianType} = React.useContext(BookingTabContext);

  let dryerArray = [];
  const dryerNumber = 5;
  // const dryerArray = [1, 2, 3, 4]
  for (let i = 0; i < dryerNumber; i++){
      dryerArray.push(i+1);
  }
    return (
        <Accordion style={{backgroundColor: '#7CEBDE', borderRadius: '10px'}} onChange={() =>{
          defineAccordianType('Dryer')
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={12}>
              <h2>Dryers</h2>
            </Grid>
            <Grid item xs={12} textAlign={'left'}>
              <AvailableButton isAvailable={true}></AvailableButton>

            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            {/* <AccordianTypeContext.Provider value={{accordianType}}>

            </AccordianTypeContext.Provider> */}
            {dryerArray.map((number) => (
              <WeekdayBox icon={DryerIcon} number={number} key={number}></WeekdayBox>
            ))}
          </Stack>
          
        </AccordionDetails>
      </Accordion>
    );
}

export default DryerAccordian;