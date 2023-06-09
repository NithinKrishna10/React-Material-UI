import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,

} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";


const DrawerDemo = ({links}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{
        
        sx:{backgroundColor:'rgba(78,184,61,1)'}
        }} open={open} onClose={() => setOpen(false)}>

      <List>
        {links.map((link,index)=>(

            <ListItemButton onClick={() => setOpen(false)}  key={index} divider>
          <ListItemIcon>
            <ListItemText>{link}</ListItemText>
          </ListItemIcon>
        </ListItemButton>
            ))}
      </List>
      </Drawer>

      <IconButton sx={{marginLeft:"auto",color:'white'}} onClick={()=>setOpen(!open)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerDemo;
