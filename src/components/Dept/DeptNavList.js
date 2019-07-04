import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashBoardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import DesktopIcon from '@material-ui/icons/DesktopWindows';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HelpIcon from '@material-ui/icons/Help';
import { Divider } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashBoardIcon/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Course Catalog" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <DesktopIcon/>
      </ListItemIcon>
      <ListItemText primary="Transfer Session" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <ScheduleIcon/>
      </ListItemIcon>
      <ListItemText primary="Add Schedule" />
    </ListItem>

    <Divider />
    
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help and Support" />
    </ListItem>
  </div>
);