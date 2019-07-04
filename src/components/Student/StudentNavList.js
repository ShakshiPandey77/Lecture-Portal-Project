import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import Book from '@material-ui/icons/Book';
import Help from '@material-ui/icons/Help';
import { Divider } from '@material-ui/core';
;

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
        <Book />
      </ListItemIcon>
      <ListItemText primary="Course Catalog" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <Help />
      </ListItemIcon>
      <ListItemText primary="Help and Support" />
    </ListItem>

  </div>
);
