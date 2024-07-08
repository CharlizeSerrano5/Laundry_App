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
        <Box>
          SELECT A SERVICE & DATE
          <BookingTabs></BookingTabs>
          <AccordionUsage></AccordionUsage>
        </Box>
      </Container>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
