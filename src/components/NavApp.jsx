import { AppBar, Button, Typography } from '@mui/material';
import React from 'react';

const NavApp = () => {
    return (
        <div>
            <AppBar>

            <Typography>Logo</Typography>
            <Button sx={{marginRight:"auto"}} color="warning">Hellow </Button>
            </AppBar>
        </div>
    );
}

export default NavApp;
