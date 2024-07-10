import { Grid, Container, Box } from '@mui/material'
import ManifestLogo from '../Assets/ManifestLogo.svg'
import './TopBar.css'
export default function TopBar(){
    return (
        <div className='TopBar'>
            <Container  sx={{ top: 0, bottom: 'auto' }}>
                <Box >
                    <Grid container spacing={1}>
                        <Grid item xs={3} textAlign={'right'} alignContent={'center'}>
                            <img src={ManifestLogo}></img>
                        </Grid>
                        <Grid item xs={6}>
                            <h1 className='TopBarTitle'>Manifest</h1>
                            <p className='TopBarSubtitle'>BUY.SELL.RENT.MANAGE.FINANCE</p>
                        </Grid>
                    </Grid>
                </Box>
                
            </Container>
        </div>        
    )
};