import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import HelpIcon from '@material-ui/icons/Help';
import { Divider } from '@material-ui/core';

export default function MainListItems() {
  const [open1, setOpen1]=React.useState(true); //

  //
   
  function handleClick1() {
    setOpen1(!open1);
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
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Course Catalog"/>
        {open1 ? <ExpandMore />: <ExpandLess />}
      </ListItem>
      <Collapse in={!open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button>
          <ListItemText primary="SEM-1" align="center"/>
          </ListItem>
          <ListItem button>
          <ListItemText primary="SEM-2" align="center"/>
          </ListItem><ListItem button>
          <ListItemText primary="SEM-3" align="center"/>
          </ListItem><ListItem button>
          <ListItemText primary="SEM-4" align="center"/>
          </ListItem><ListItem button>
          <ListItemText primary="SEM-5" align="center"/>
          </ListItem><ListItem button>
          <ListItemText primary="SEM-6" align="center"/>
          </ListItem><ListItem button>
          <ListItemText primary="SEM-7" align="center"/>
          </ListItem><ListItem button>
          <ListItemText primary="SEM-8" align="center"/>
          </ListItem>
      </List>
      </Collapse>
      <Divider/>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help and Support" />
    </ListItem>
    </List>
  );
}
