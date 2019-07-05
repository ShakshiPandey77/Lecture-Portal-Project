
import React from 'react';
import clsx from 'clsx';
import { fade,makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Build';
import Logout from '@material-ui/icons/Input';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import {secondaryListItems } from './AdminNavList';
import MainListItems from './AdminNavList'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
root: {
display: 'flex',
},
toolbar: {
paddingRight: 24, // keep right padding when drawer closed
},
toolbarIcon: {
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
padding: '0 8px',
...theme.mixins.toolbar,
},
appBar: {
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
}),
},
appBarShift: {
marginLeft: drawerWidth,
width: `calc(100% - ${drawerWidth}px)`,
transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
}),
},
menuButton: {
marginRight: 36,
},
menuButtonHidden: {
display: 'none',
},
title: {
flexGrow: 1,
marginLeft:'-20px',

},
admin:{
    marginTop:'-50px', // marginTop and fontSize are related: To keep Divider in the right place. 
    padding: '0px',
    fontSize:'20px',
},
search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  [theme.breakpoints.down('med')]: {
    marginLeft: theme.spacing(1),
    width: '50px',
  },
},
searchIcon: {
  width: theme.spacing(7),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
inputRoot: {
  color: 'inherit',
},
inputInput: {
  padding: theme.spacing(1, 1, 1, 7),
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 250,
    '&:focus': {
      width: 300,
    },
  },
},
drawerPaper: {
position: 'absolute',
whiteSpace: 'nowrap',
width: drawerWidth,
transition: theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
}),
},
drawerPaperClose: {
overflowX: 'hidden',
transition: theme.transitions.create('width', {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
}),
width: theme.spacing(7),
[theme.breakpoints.up('sm')]: {
  width: theme.spacing(9),
},
},
appBarSpacer: theme.mixins.toolbar,
content: {
flexGrow: 1,
height: '100vh',
overflow: 'auto',
},
container: {
paddingTop: theme.spacing(4),
paddingBottom: theme.spacing(4),
minHeight: '700px',
},
paper: {
padding: theme.spacing(24),
display: 'flex',
overflow: 'auto',
flexDirection: 'column',
},
fixedHeight: {
height: 240,
},
text_title :{
marginTop:'3px',
},
footer: {
  color:'white',
  padding: theme.spacing(1),
  marginTop: '20px',
  zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
}),
marginLeft: drawerWidth-200,
width:'1320px',
transition: theme.transitions.create(['width', 'margin'], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
}),
   backgroundColor: '#0D47A1',
},
}));

export default function AdminDashboard() {
const classes = useStyles();
const [open, setOpen] = React.useState(true);
const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

const handleDrawerOpen = () => {
setOpen(true);
};
const handleDrawerClose = () => {
setOpen(false);
};
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

return (
<div className={classes.root}>
  <CssBaseline />
  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerOpen}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/BMS_College_of_Engineering.svg/220px-BMS_College_of_Engineering.svg.png" width="40px" align="left" />
       <div align="left" className={classes.text_title}>&nbsp;BMS LRS</div>
      </Typography>
      
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
            <div>
              <IconButton
                aria-label="Settings"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SettingsIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open1}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><IconButton><AccountCircle/></IconButton>Profile</MenuItem>
                <MenuItem onClick={handleClose}><IconButton><Settings/></IconButton>Account Settings</MenuItem>
                <MenuItem onClick={handleClose}><IconButton><Logout/></IconButton>Logout</MenuItem>
              </Menu>
            </div>
    </Toolbar>
  </AppBar>
   <Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
    }}
    open={open}
  >
    <div className={classes.toolbarIcon}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Typography class={classes.admin}>Administrator</Typography>
    <Divider />
    <MainListItems/>
     <Divider />
    <List>{secondaryListItems}</List> 
  </Drawer> 
<main className={classes.content}>
    <div className={classes.appBarSpacer} />
    <Container maxWidth="lg" className={classes.container}>
      {/* Enter code here */}
    </Container>
    <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">CODE I/O BMSCE. @ All Rights Reserved</Typography>
        </Container>
      </footer>
  </main>  
</div>
);
}


