import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Divider } from '@material-ui/core';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
//import BarChartIcon from '@material-ui/icons/BarChart';
//import LayersIcon from '@material-ui/icons/Layers';
//import AssignmentIcon from '@material-ui/icons/Assignment';
import Help from '@material-ui/icons/Help';
//import Person from '@material-ui/icons/Person';
import CalenderToday from '@material-ui/icons/CalendarToday';
import CameraAlt from '@material-ui/icons/CameraAlt';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Delete from '@material-ui/icons/Delete';

export default function MainListItems() {
  const [open1, setOpen1]=React.useState(true); //
  const [open2, setOpen2]=React.useState(true);
  const [open3, setOpen3]=React.useState(true);
  const [open4, setOpen4]=React.useState(true);
  //
   
  function handleClick1() {
    setOpen1(!open1);
  }

  function handleClick2() {
    setOpen2(!open2);
  }

  function handleClick3() {
    setOpen3(!open3);
  }
  
  function handleClick4() {
    setOpen4(!open4);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <CalenderToday/>
        </ListItemIcon>
        <ListItemText primary="Time Table"/>
        {open1 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={!open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button>
          <ListItemText primary="Create Time Table" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="Time Table Details" align="center"/>
          </ListItem>
          </List>
          </Collapse>
          <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Users"/>
        {open2 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={!open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button>
          <ListItemText primary="Admin" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="Student" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="Lecturer" align="center"/>
          </ListItem>
          </List>
          </Collapse>
          <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <CameraAlt/>
        </ListItemIcon>
        <ListItemText primary="Devices"/>
        {open3 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={!open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button>
          <ListItemText primary="Camera" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="Mapping" align="center"/>
          </ListItem>
          </List>
          </Collapse>
          <ListItem button onClick={handleClick4}>
        <ListItemIcon>
          <AccountBalance/>
        </ListItemIcon>
        <ListItemText primary="Academics"/>
        {open4 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={!open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button>
          <ListItemText primary="Departments" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="Subjects" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="Classrooms" align="center"/>
          </ListItem>
          </List>
          </Collapse>
    </List>
  );
}
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
