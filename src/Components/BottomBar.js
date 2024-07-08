import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';
import { Grid, AppBar, IconButton, Toolbar, Box } from '@mui/material';
import './BottomBar.css'
export default function BottomBar(){
    return (
        <div className='BottomBar'>
            <AppBar position="fixed" style={{backgroundColor: '#3D5CAC'}} sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Grid container spacing={1} textAlign={'center'}>
                        <Grid item xs={3}>
                            <IconButton>
                                <HomeIcon className='BottomIcon'></HomeIcon>
                            </IconButton> 
                        </Grid>
                        <Grid item xs={3}>
                            <IconButton>
                                <AccountCircleIcon className='BottomIcon'></AccountCircleIcon>
                            </IconButton>
                        </Grid>
                        <Grid item xs={3}>
                            <IconButton>
                                <NotificationsIcon className='BottomIcon'></NotificationsIcon>
                            </IconButton>
                        </Grid>
                        <Grid item xs={3}>
                            <IconButton>
                                <SmsIcon className='BottomIcon'></SmsIcon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}