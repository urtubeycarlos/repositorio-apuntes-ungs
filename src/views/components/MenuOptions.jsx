import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SearchIcon from '@material-ui/icons/Search';
import UploadIcon from '@material-ui/icons/Update';

const MenuOptions = ({}) => {
  return (
    <div>
      <List>
          <ListItem button key="Buscar" onClick={() => window.location.href = "/home/search"}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Buscar" />
          </ListItem>
          <ListItem button key="Subir" onClick={() => window.location.href = "/home/upload"}>
            <ListItemIcon><UploadIcon /></ListItemIcon>
            <ListItemText primary="Subir" />
          </ListItem>
        </List>
        <Divider />
    </div>)
}

export default MenuOptions;