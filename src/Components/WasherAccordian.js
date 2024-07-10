import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import WeekdayButton from './WeekdayButton';
import LaundryIcon from '../Assets/DefaultLaundryIcon.svg'
import { Grid, Stack, Box } from '@mui/material';
import WeekdayBox from './WeekdayBox';
import AvailableButton from './AvailableButton';
function WasherAccordian() {
    const currentDate = new Date();
    const currWeek = [];
    // console.log('currentDate', currentDate);
    let tempDate = currentDate;
    for (let i = 0; i < 7; i++){
      // Push onto the week array 7 times
      let tempDate = new Date(currentDate);
      tempDate.setDate(currentDate.getDate() + i);
      currWeek.push(tempDate);
    //   console.log('tempDate: ', tempDate);
    }
    return (
        <Accordion style={{backgroundColor: '#79CBF9', borderRadius: '10px'}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Grid container spacing={1} textAlign={'left'}>
                <Grid item xs={12}>
                <h2>Washers</h2>
                </Grid>
                <Grid item xs={12} textAlign={'left'}>
                <AvailableButton isAvailable={true}></AvailableButton>

                </Grid>
            </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    <WeekdayBox icon={LaundryIcon}></WeekdayBox>
                    <WeekdayBox icon={LaundryIcon}></WeekdayBox>
                    <WeekdayBox icon={LaundryIcon}></WeekdayBox>
                </Stack>
                
            </AccordionDetails>
        </Accordion>
    );
}

export default WasherAccordian;