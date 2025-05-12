import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const navItems = [
  { text: 'Home', path: '/', icon: <HomeIcon /> },
  { text: 'Create', path: '/create', icon: <AddCircleOutlineIcon /> },
  { text: 'Profile', path: '/profile', icon: <AccountCircleIcon /> },
  { text: 'Settings', path: '/settings', icon: <SettingsIcon /> },
//   { text: 'Log out', path: '/logout', icon: <LogoutIcon /> },
];


const DrawerSections = ({currentLocation, navigate, myTheme}) => {
  return (
    <div>
        {navItems.map(({ text, path, icon }) => (
            <ListItem
            key={path}
            disablePadding
            sx={{
                bgcolor:
                currentLocation.pathname === path
                    ? // @ts-ignore
                    myTheme.palette.favColor.main
                    : null,
            }}
            >
            <ListItemButton onClick={() => navigate(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
            </ListItem>
         ))}
    </div>
  )
}

export default DrawerSections