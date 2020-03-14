import React from 'react';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SearchIcon from '@material-ui/icons/FindInPage';
import UploadIcon from '@material-ui/icons/CloudUpload';
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';

const MenuOptions = ({}) => {
  return (
    <div>
      <List>
          <ListItem button key="Buscar" onClick={() => window.location.href = "/home/search"}>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Buscar Apuntes" />
          </ListItem>
          <ListItem button key="Subir" onClick={() => window.location.href = "/home/upload"}>
            <ListItemIcon><UploadIcon /></ListItemIcon>
            <ListItemText primary="Subir Apuntes" />
          </ListItem>
          <ListItem button key="Contacto" onClick={() => window.location.href = "/home/contact"}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItem>
          <ListItem button key="Acerca de" onClick={() => window.location.href = "/home/info"}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Acerca de" />
          </ListItem>
        </List>
        <Divider />
    </div>)
}

export default MenuOptions;