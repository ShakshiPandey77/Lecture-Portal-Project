import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import Book from '@material-ui/icons/Book';
import Help from '@material-ui/icons/Help';
//import Person from '@material-ui/icons/Person';
import CalenderToday from '@material-ui/icons/CalendarToday';
import CameraAlt from '@material-ui/icons/CameraAlt';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Delete from '@material-ui/icons/Delete';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CalenderToday />
      </ListItemIcon>
      <ListItemText primary="Time Table" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CameraAlt/>
      </ListItemIcon>
      <ListItemText primary="Devices" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalance />
      </ListItemIcon>
      <ListItemText primary="Academics" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>

    <ListItem button>
      <ListItemIcon>
        <Delete />
      </ListItemIcon>
      <ListItemText primary="Delete videos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Help />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>

  </div>
);
