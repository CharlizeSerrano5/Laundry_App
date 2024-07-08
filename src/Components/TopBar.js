import { Grid, Container, Box } from '@mui/material'
import ManifestLogo from '../Assets/ManifestLogo.svg'
import './TopBar.css'
export default function TopBar(){
    return (
        <div className='TopBar'>
            <Container>
                <Box>
                    <Grid container spacing={1}>
                        <Grid item xs={3} textAlign={'right'}>
                            <img src={ManifestLogo}></img>
                        </Grid>
                        <Grid item xs={6}>
                            <h1>Manifest</h1>
                            <p>BUY.SELL.RENT.MANAGE.FINANCE</p>
                        </Grid>
                    </Grid>
                </Box>
                
            </Container>
        </div>        
    )
};