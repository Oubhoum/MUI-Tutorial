import Appbar from 'MUI-Components/Appbar';
import { Outlet } from 'react-router-dom';
import Drawerr from './Drawerr';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const drawerWidth = 240;

const Root = () => {

    const [myMode, setMyMode] = useState('dark');
    
    const darkTheme = createTheme({
      palette : {
        // @ts-ignore
        mode : myMode,
        // @ts-ignore
        abdu : {
          main : "#647488",
          contrastText : "#fff",
        },
      },
    });

  return (
    
    <ThemeProvider theme={darkTheme}>

      <CssBaseline/>

      <div>
  
        <Appbar drawerWidth={drawerWidth}/>
        <Drawerr setMyMode={setMyMode} drawerWidth={drawerWidth}/>
  
  
        <Box
            component="main"
            sx={{
                ml : `${drawerWidth}px`,
                display : "flex",
                justifyContent  : "center",
                mt : '66px'
              }}
              >
          <Outlet/>
        </Box>
      </div>
    </ThemeProvider>
  )
}

export default Root