import { Box } from "@mui/material";
function AvailableButton({isAvailable, givenTime}){
    // set a state for if its a available and if its not available
    return (
        <div>
            <Box style={{backgroundColor: isAvailable? '#76B148' :'#A52A2A', padding: '12px', display: 'inline-block', borderRadius: '5px'}}>
                <h3>{isAvailable? 
                givenTime? `Available Until ${givenTime}`: 'Available Now': 
                `Available After ${givenTime}`}</h3>
            </Box>

        </div>
        
    )
}

export default AvailableButton;