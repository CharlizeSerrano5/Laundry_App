import { Box, Container, Stack } from '@mui/material';
import './App.css';
import BookingTabs from './Components/BookingTabs';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Container>
        <Box style={{backgroundColor: '#F2F2F2', padding: '20px', marginTop: '15px', borderRadius: '10px'}}>
          <Stack spacing={3}>
            <h2 className='ServiceSelect'>
              SELECT A SERVICE & DATE
            </h2>
            <BookingTabs></BookingTabs>

          </Stack>
        </Box>
      </Container>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
