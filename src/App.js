import { Box, Container } from '@mui/material';
import './App.css';
import AccordionUsage from './Components/Accordian';
import BookingTabs from './Components/BookingTabs';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Container>
        <Box style={{backgroundColor: '#F2F2F2', padding: '20px'}}>
          <h2 className='ServiceSelect'>
            SELECT A SERVICE & DATE
          </h2>
          <BookingTabs></BookingTabs>
          <h2 className='ServiceNote'>
            YOU CAN ONLY BOOK UP TO 5 SERVICES AT A TIME
          </h2>
          <Container>
            <AccordionUsage></AccordionUsage>

          </Container>
        </Box>
      </Container>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
