import { Box, Container, Stack } from '@mui/material';
import './App.css';
import BookingTabs from './Components/BookingTabs';
import TopBar from './Components/TopBar';
import BottomBar from './Components/BottomBar';
import BookingTabContext from './Components/BookingTabContext';
import CenterContainer from './Components/CenterContainer';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
        <CenterContainer></CenterContainer>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
