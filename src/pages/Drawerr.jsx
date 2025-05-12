import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';



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
    <div>
      
        <Drawer
          sx={{
            // width: `${drawerWidth}px`,
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
                    // localStorage.setItem("currentMode",
                    //   myTheme.palette.mode === "dark" ? "light" : "dark")
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


              <ListItem
                    disablePadding
                    sx={{bgcolor : currentLocation.pathname === "/"
                      ?
                      // @ts-ignore
                      myTheme.palette.favColor.main
                      : null,
                    }}
                    >
                <ListItemButton onClick={() => { navigate("/")}}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            
              <ListItem 
                    disablePadding
                    sx={{bgcolor : currentLocation.pathname === "/create"
                      ?
                      // @ts-ignore
                      myTheme.palette.favColor.main
                      : null,
                    }}
                    >
                <ListItemButton onClick={() => navigate("/create")}>
                  <ListItemIcon>
                    <AddCircleOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Create" />
                </ListItemButton>
              </ListItem>
            
            <ListItem
                  disablePadding
                  sx={{bgcolor : currentLocation.pathname === "/profile"
                      ?
                      // @ts-ignore
                      myTheme.palette.favColor.main
                      : null,
                    }}
                  >
              <ListItemButton onClick={() => { navigate("profile")}}>
                <ListItemIcon>
                  <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem
                    disablePadding
                    sx={{bgcolor : currentLocation.pathname === "/setting"
                      ?
                      // @ts-ignore
                      myTheme.palette.favColor.main
                      : null,
                    }}
                    >
              <ListItemButton onClick={() => { navigate("/settings")}}>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            
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
      
    </div>
  )
}

export default Drawerr