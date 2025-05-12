import Appbar from 'MUI-Components/Appbar';
import { Outlet } from 'react-router-dom';
import Drawerr from './Drawerr';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import getDesignTokens from 'styles/MyTheme';

const drawerWidth = 240;

const Root = () => {

    const [mode, setMyMode] = useState(
                                localStorage.getItem("currentMode") === null
                                ? "light"
                                : localStorage.getItem("currentMode") === "light"
                                ? "light"
                                : "dark"
                              );

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

  const theme = useMemo(() =>
        createTheme(getDesignTokens(mode)),
        [mode]);

  return (
    
    <ThemeProvider theme={theme}>

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