import { Button } from "@mui/material";

const CustomButton = ({ buttonText, type="text", onClickAction=()=>null, secondaryStyle=false }) => {
    const buttonColor = (secondaryStyle ? "red" : "#15a246");
    const buttonHover = secondaryStyle ? "red" : '#118238';

    const style = {
        backgroundColor: {buttonColor}.buttonColor,
        padding: '6px 2.5rem',
        fontSize: '1.1rem',
        fontFamily: '"Montserrat", "sans-serif"',
        "&:hover": {
            backgroundColor: {buttonHover}.buttonHover
        }
    };

    return(
        <Button 
            onClick={onClickAction}
            type={type}
            variant='contained'
            sx={style}
        >
            {buttonText}
        </Button>
    );
}

export default CustomButton;