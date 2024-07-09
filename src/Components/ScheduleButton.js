import { Box, Container } from "@mui/material";
function ScheduleButton(){
    // set a state for if its a available and if its not available\
    // TODO: edit this is originally from availableButton
    return (
        <Container>
            <Box style={{backgroundColor: '#3D5CAC', padding: '5px', display: 'flex', borderRadius: '5px', justifyContent: 'center'}}>
                <h3>Schedule</h3>
            </Box>

        </Container>
        
    )
}

export default ScheduleButton;