import { Button } from "@mui/material";
function ConfirmButton({green, content}){
    const greenStyle={
        backgroundColor: '#76B148',
        display: 'inline', 
        borderRadius: '5px',
        padding: '5px', 
        width: '100%', 
        justifyContent: 'center',
        color: 'white',
    }
    const redStyle={
        backgroundColor: '#A52A2A',
        display: 'inline', 
        borderRadius: '5px',
        padding: '5px', 
        width: '100%', 
        justifyContent: 'center',
        color: 'white',
    }

    
    return (
        <Box style={{backgroundColor: '#F2F2F2', padding: '10px', borderRadius: '10px'}}>
            <div>{dryerBooked.day} {dryerBooked.time}</div>
            <Stack spacing={1}>
                <Button style={buttonStyle}>Confirm Completion</Button>
                <Button style={otherButtonStyle}>Report an Issue</Button>
            </Stack>
        </Box>
    )
}
export default ConfirmButton;