import { Box, Paper, Typography, IconButton } from "@mui/material";
import "./Home.css";
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";


const Home = () => {

  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3100/mydata')
    .then((res) => res.json())
    .then((data) => setmydata(data));
  }, [mydata])

  let totalPrice = 0; //mydata.reduce((sum, item) => sum + item.price, 0);



  const handleDelete = (dt) => {
                      fetch(`http://localhost:3100/mydata/${dt.id}`, {
                        method : 'DELETE'
                      });

                      const newArray = mydata.filter((myObject) => { 
                        return myObject.id !== dt.id;
                       });
                       
                      setmydata(newArray);
                    };

  return (
    <Box>

      {mydata.map(dt => {

        totalPrice += dt.price;

        return (
  
          <Paper sx={{
                  position : "relative",
                  width : "350px",
                  display : "flex",
                  justifyContent : "space-between",
                  mt : "22px",
                  pt : "27px",
                  pb : "7px"
                  }}
                  key={dt.id}
                  >

            <Typography sx={{
                    ml : "16px",
                    fontSize : "1.3em"
                    }}
                    variant="h6"
                    >
                      {dt.title}
            </Typography>
            
            <Typography
                sx={{
                  mr : "33px",
                  fontWeight : 500,
                  fontSize : "1.4em",
                  opacity : "0.8",
                }}
                variant="h6"
            >
                  ${dt.price}
            </Typography>

            <IconButton
                  sx={{
                    position : "absolute",
                    top : "0",
                    right : "0",
                    mb : "2px"
                    }}
                    onClick={() => handleDelete(dt)}
                    >
              <ClearIcon sx={{
                fontSize : "20px"
              }}/>
            </IconButton>
          </Paper>
        )
      })}
      
        <Typography
            mt="65px"
            textAlign="center"
            variant="h5"
            sx={{ mt: 3, fontWeight: 'bold' }}
            >
           You spend : ${totalPrice}
        </Typography>

    </Box>
  )
};

export default Home;