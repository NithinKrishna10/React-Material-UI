import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
const Navbar = ({ links }) => {
  const [value, setValue] = useState(0);
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <AppleIcon />
          </Grid>
          <Grid item xs={6}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {links.map((link, index) => (
                <Tab key={index} label={link} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box>
              <Button sx={{marginLeft:'auto'}} variant="contained">Login</Button>
              <Button sx={{marginLeft:1}} variant="contained">Signup</Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
