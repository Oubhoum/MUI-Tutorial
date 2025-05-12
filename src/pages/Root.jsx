import Appbar from 'MUI-Components/Appbar';
import { Outlet } from 'react-router-dom';
import Drawerr from './Drawerr';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const Root = () => {

    const [mode, setMyMode] = useState(
                                localStorage.getItem("currentMode") === null
                                ? "light"
                                : localStorage.getItem("currentMode") === "light"
                                ? "light"
                                : "dark"
                              );
    
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ali: {
              main: "#64748B",
            },
            favColor: {
              main: grey[300]
            }
          }
        : {
            // palette values for dark mode
            ali: {
              // teal
              main: "rgb(0, 128, 128)",
            },
            favColor: {
              main: grey[800]
            }
          }),
    },
  });

  const [noneORblock, setNoneORblock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const showDrawer = () => { 
    setDrawerType('temporary')
    setNoneORblock('block')
   }

   const hideDrawer = () => { 
      setDrawerType('permanent')
      setNoneORblock('none')
    }

  return (
    
    <ThemeProvider theme={darkTheme}>

      <CssBaseline/>

      <div>
  
        <Appbar
              drawerWidth={drawerWidth}
              showDrawer={showDrawer}
              />
        <Drawerr
              drawerType={drawerType} 
              noneORblock={noneORblock}
              setMyMode={setMyMode}
              drawerWidth={drawerWidth}
              hideDrawer={hideDrawer}
              />
        <Box
            // className='border'
            component="main"
            sx={{
                ml : {sm : `${drawerWidth}px`},
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