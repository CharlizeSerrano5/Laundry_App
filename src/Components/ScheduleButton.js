import { Box, Container } from "@mui/material";
function ScheduleButton(){
    // set a state for if its a available and if its not available
    // TODO: edit this is originally from availableButton
    const disabledStyle = {
        backgroundColor: '#B3B3B3',
        color: '#33235F',
        padding: '5px', 
        display: 'flex', 
        borderRadius: '5px', 
        justifyContent: 'center'
    }
    const enabledStyle = {
        backgroundColor: '#3D5CAC', 
        padding: '5px', 
        display: 'flex', 
        borderRadius: '5px', 
        justifyContent: 'center'
    }
    
    return (
        <Container>
            <Box style={disabledStyle}>
                <h3>Schedule</h3>
            </Box>

        </Container>
        
    )
}

export default ScheduleButton;