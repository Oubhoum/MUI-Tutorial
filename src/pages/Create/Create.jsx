import { Box, InputAdornment, TextField } from "@mui/material";
import "./Create.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { ChevronRight, Scale } from "@mui/icons-material";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.ali.main,
  '&:hover': {
    backgroundColor: theme.palette.ali.main,
    scale : "1.1"
  },
}));

const Create = () => {
  return (
    <Box
         component="form"
         sx={{
              width : "380px"
            }} 
         >

        <TextField
          fullWidth
          label="Transaction Title"
          sx={{ mt: "22px", display : "block" }}
          slotProps={{
            input: {
              startAdornment:
                <InputAdornment position="start">
                  &#128073;
                </InputAdornment>,
            },
          }}
          variant = "filled"
        />

        <TextField
          fullWidth
          label="Transaction Title"
          sx={{ mt: "22px", display : "block" }}
          slotProps={{
            input: {
              startAdornment:
                <InputAdornment position="start">
                  $
                </InputAdornment>,
            },
          }}
          variant = "filled"
        />

        <ColorButton
          variant="contained"
          sx={{mt : "22px"}}
          >
          Submit
          <ChevronRight/>
        </ColorButton>


    </Box>
  )
}

export default Create