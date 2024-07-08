import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import WeekdayButton from './WeekdayButton';
import LaundryIcon from '../Assets/LaundryIcon.svg'
import { Grid, Stack, Box } from '@mui/material';
import SelectWeekday from './SelectWeekday';
import AvailableButton from './AvailableButton';
function BBQAccordian() {
    return (
        <Accordion style={{backgroundColor: '#F97979', borderRadius: '10px'}}>
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
          <SelectWeekday></SelectWeekday>
        </AccordionDetails>
      </Accordion>
    );
}

export default BBQAccordian;