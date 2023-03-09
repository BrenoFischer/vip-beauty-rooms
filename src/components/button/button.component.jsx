import { Button } from "@mui/material";

const CustomButton = ({ buttonText }) => {
    return(
        <Button 
            variant='contained'
            sx={{
                backgroundColor: '#15a246',
                padding: '6px 2.5rem',
                fontSize: '1.1rem',
                fontFamily: '"Montserrat", "sans-serif"',
                "&:hover": {
                    backgroundColor: '#118238',
                }
            }}
        >
            {buttonText}
        </Button>
    );
}

export default CustomButton;