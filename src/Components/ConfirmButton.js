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
        <div>
            <Button style={green? greenStyle: redStyle}>
                {content}
            </Button>
        </div>
    )
}
export default ConfirmButton;