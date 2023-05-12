import { Box,Collapse,List ,ListItem ,ListItemButton ,ListItemIcon,ListItemText } from '@mui/material';
import React, { useState } from 'react';

const ListDemo = () => {
    const array = ["First","Second","Third","Fourth","Fifth"]
    const [open,setOpen] = useState(false)
    return (
        <div>
            <Box>
                <List>
                <ListItem divider>
                        <ListItemButton onClick={()=> open ? setOpen(false) : setOpen(true)}>
                            <ListItemIcon>{">"}</ListItemIcon>
                            <ListItemText primary={"Expand List"}/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Collapse in={open}>
                <List sx={{width:300 , background:"grey"}}>
                    {array.map((listElm)=>(
                        
                        <ListItem divider>
                        <ListItemButton onClick={()=>setOpen(false)}>
                            <ListItemIcon>{">"}</ListItemIcon>
                            <ListItemText primary={listElm}/>
                        </ListItemButton>
                    </ListItem>
                        ))}

                </List>
                        </Collapse>
            </Box>
        </div>
    );
}

export default ListDemo;
