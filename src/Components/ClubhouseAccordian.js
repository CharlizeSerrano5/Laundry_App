import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Box } from '@mui/material';
import WeekdayBox from './WeekdayBox';
import AvailableButton from './AvailableButton';
import ClubHouseIcon from '../Assets/ClubHouseIcon.svg'
import AccordianTypeContext from './AccordianTypeContext';
import React from 'react';
function ClubhouseAccordian() {
  const {accordianType, defineAccordianType} = React.useContext(AccordianTypeContext);

    return (
        <Accordion style={{backgroundColor: '#D893F9', borderRadius: '10px'}} onChange={() => {
          defineAccordianType('Clubhouse')
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={12}>
              <h2>Clubhouse</h2>
            </Grid>
            <Grid item xs={12} textAlign={'left'}>
              <AvailableButton isAvailable={true} givenTime={'6:30 PM'}></AvailableButton>

            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <WeekdayBox icon={ClubHouseIcon}></WeekdayBox>
        </AccordionDetails>
      </Accordion>
    );
}

export default ClubhouseAccordian;