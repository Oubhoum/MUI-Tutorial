import {
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


const Drawerr = ({drawerWidth}) => {

  const navigate = useNavigate();

  return (
    <div>
      
        <Drawer
          sx={{
            width: `${drawerWidth}px`,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: `${drawerWidth}px`,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />

          <List>

              <ListItem disablePadding>
                <ListItemButton onClick={() => { navigate("/")}}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/create")}>
                  <ListItemIcon>
                    <AddCircleOutlineIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Create" />
                </ListItemButton>
              </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton onClick={() => { navigate("profile")}}>
                <ListItemIcon>
                  <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => { navigate("/settings")}}>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
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