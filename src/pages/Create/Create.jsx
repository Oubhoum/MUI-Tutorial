import { Box, InputAdornment, TextField } from "@mui/material";
import "./Create.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.ali.main,
  '&:hover': {
    backgroundColor: theme.palette.ali.main,
    scale : "1.1"
  },
}));

const Create = () => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
          autoComplete="off"
         component="form"
         sx={{
              width : "380px"
            }} 
         >

        <TextField
          onChange={(eo) => {
            setTitle(eo.target.value)
          }}
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
          onChange={(eo) => {
            setPrice(Number(eo.target.value))
          }}
          fullWidth
          label=" Amount"
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
          onClick={() => {
            // if (price !== 0 && title !== "")
            // {
            // }
            fetch("http://localhost:3100/mydata", {
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json'
              },
              body : JSON.stringify({price, title})
            })
            .then(() => { 
              navigate("/");
             });

          }}
          >
          Submit
          <ChevronRight/>
        </ColorButton>


    </Box>
  )
}

export default Create