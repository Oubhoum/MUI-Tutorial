import React from 'react'

import {
  AppBar,
  Toolbar,
  Link,
  Avatar,
  Typography,
} from '@mui/material';



const Appbar = ({drawerWidth}) => {
  return (
    <div>
        
        <AppBar
            sx={{ width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px` }} position="static"
            >
        <Toolbar>

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
            {/* 
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}

            <Typography sx={{mr: 3}} variant="body1" color="inherit">Abdelaziz OUBHOUM</Typography>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />


        </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Appbar