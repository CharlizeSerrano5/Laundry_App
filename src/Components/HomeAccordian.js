import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Grid } from '@mui/material';
import SelectWeekday from './WeekdayBox';
import AvailableButton from './AvailableButton';
function HomeAccordian({primary, time, title}) {
    return (
        <Accordion style={{backgroundColor: {primary}, borderRadius: '10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={12}>
              <h2>{title}</h2>
            </Grid>
            <Grid item xs={12} textAlign={'left'}>
              <AvailableButton isAvailable={false} givenTime={time}></AvailableButton>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <SelectWeekday></SelectWeekday>
        </AccordionDetails>
      </Accordion>
    );
}

export default HomeAccordian;