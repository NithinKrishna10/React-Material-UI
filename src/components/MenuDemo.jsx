import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const MenuDemo = () => {
    const [anchorElm,setAngchorElm] = useState(null);
    const [open , setOpen] = useState(false);
    const handleClose =()=>{
        setAngchorElm(null);
        setOpen(false);
    }
    const handleClick = (e) =>{
        setAngchorElm(e.currentTarget);
        setOpen(true);
    }
    return (
        <div>
            
            <Button variant='contained' onClick={handleClick}>
                Open Menu
            </Button>
            <Menu anchorEl={anchorElm} open ={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Open Menu</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuDemo;
