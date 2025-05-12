import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Link,
  Avatar,
  Typography, IconButton,
} from '@mui/material';



const Appbar = ({drawerWidth, showDrawer}) => {
  return (
    <div>
        
        <AppBar
            sx={{ width: {sm : `calc(100% - ${drawerWidth}px)`},
                ml: {xs : 0, sm : `${drawerWidth}px`},
            }}
            
            position="static"
            >
        <Toolbar>
            <IconButton
                    onClick={() => {
                        showDrawer()
                    }}
                    aria-label=""
                    color="inherit"
                    sx={{display : {sm : "none"}, mr : "15px"}}
                    >
              <Menu/>
            </IconButton>
            <Link
                underline='none'
                color='inherit'
                href="/"
                sx={{
                    flexGrow: 1,
                    "&:hover" : {
                        fontSize : "20px",
                        color : "red",
                    },
                    transition : " .5s "
                }}
            >
                My expenses
            </Link>

            <Typography sx={{mr: 3}} variant="body1" color="inherit">Abdelaziz OUBHOUM</Typography>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />


        </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Appbar