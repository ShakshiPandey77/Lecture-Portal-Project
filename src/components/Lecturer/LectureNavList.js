import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import VideoIcon from '@material-ui/icons/Videocam';
// import PersonIcon from '@material-ui/icons/Person';
import DesktopIcon from '@material-ui/icons/DesktopWindows';
import HelpIcon from '@material-ui/icons/Help';

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
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Course Catalog" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoIcon />
      </ListItemIcon>
      <ListItemText primary="Video" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="My Students" />
    </ListItem> */}
    <ListItem button>
      <ListItemIcon>
        <DesktopIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer Session" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help and Support" />
    </ListItem>
  </div>
);
