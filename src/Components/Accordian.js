import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import WeekdayButton from './WeekdayButton';
import LaundryIcon from '../Assets/LaundryIcon.svg'
import { Grid, Stack, Box } from '@mui/material';

export default function AccordionUsage() {
  const currentDate = new Date();
  const currWeek = [];
  console.log('currentDate', currentDate);
  let tempDate = currentDate;
  for (let i = 0; i < 7; i++){
    // Push onto the week array 7 times
    let tempDate = new Date(currentDate);
    tempDate.setDate(currentDate.getDate() + i);
    currWeek.push(tempDate);
    console.log('tempDate: ', tempDate);
  }
  console.log(currWeek);
  return (
    <div>
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
              <Box style={{backgroundColor: '#76B148', padding: '12px', display: 'inline-block', borderRadius: '5px'}}>
                <h3>Available Now</h3>
              </Box>

            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                container
                spacing={0.5}
                padding={'0px'}
              >
                <img src={LaundryIcon}></img>
                {currWeek.map((weekday) => (
                  <WeekdayButton key={`${weekday.getDay()}`} WeekDay={weekday.getDay()} Month={weekday.getMonth()+1} Date={weekday.getDate()}
                  Year={weekday.getFullYear()}></WeekdayButton>
                  
                ))}
                {/* <WeekdayButton></WeekdayButton>
                <WeekdayButton></WeekdayButton>
                <WeekdayButton></WeekdayButton> */}
                </Stack>
            </Grid>
            <Grid item xs={12} textAlign={'left'}>
              Available Until 5 PM

            </Grid>
            
          </Grid>
          </Box>
          
        
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Grid container spacing={1} textAlign={'left'}>
            <Grid item xs={12}>
              <h2>Dryers</h2>

            </Grid>
            <Grid item xs={12} textAlign={'left'}>
              <div>
                Available After 5 PM
              </div>

            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}