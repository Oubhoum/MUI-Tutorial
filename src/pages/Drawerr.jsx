import {
  Drawer,
  Divider,
  List,
  ListItem,
  useTheme,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import DrawerSections from './DrawerSections';
import LogoutIcon from '@mui/icons-material/Logout';

const Drawerr = ({
                drawerWidth,
                setMyMode,
                noneORblock,
                drawerType,
                hideDrawer
              }) => {

  const navigate = useNavigate();
  const myTheme = useTheme();
  
  const currentLocation = useLocation();

  return (

    <Box component="nav">

        <Drawer
          sx={{
            display: {xs: `${noneORblock}`, sm: "block", },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: `${drawerWidth}px`,
              boxSizing: 'border-box',
            },
          }}
          variant={drawerType}
          anchor="left"
          open={true}
          onClose={() => {
            hideDrawer()
          }}
        >
          <List>

            <ListItem
                disablePadding
                sx={{
                    display : "flex",
                    justifyContent : "center",
                    mb : "15px"
                  }}
                >
            
              <IconButton
                  onClick={() => {
                    localStorage.setItem("currentMode",
                      myTheme.palette.mode === "dark" ? "light" : "dark"
                    )
                    setMyMode(myTheme.palette.mode === "light" ? "dark" : "light");
                  }}
                  color="inherit"
                >
                  {myTheme.palette.mode === "dark" ? (
                    <Brightness7 sx={{ color: "orange" }} />
                  ) : (
                    <Brightness4 />
                  )}
              </IconButton>

            </ListItem>

            <Divider />
            <DrawerSections
                currentLocation={currentLocation}
                navigate={navigate}
                myTheme={myTheme}
                />

                <ListItem
                  disablePadding
                  sx={{bgcolor : currentLocation.pathname === "/logout"
                      ?
                      // @ts-ignore
                      myTheme.palette.favColor.main
                      : null,
                    }}
                  >
              <ListItemButton onClick={() => { navigate("/logout")}}>
                <ListItemIcon>
                  <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>

          </List>

        </Drawer>

    </Box>

  )
}

export default Drawerr