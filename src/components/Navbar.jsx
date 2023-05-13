import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import DrawerDemo from "./DrawerDemo";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const Navbar = ({ links }) => {

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMatch);
  const [value, setValue] = useState();
  return (
    <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(78,184,61,1) 0%, rgba(27,189,73,0.3337710084033614) 61%, rgba(58,201,38,0.7987570028011204) 100%)"}}>
      <Toolbar>
        { isMatch ? 
        <> 
        <Typography>
        <AppleIcon />
        </Typography>
        <DrawerDemo links={links}/>
        </> :
        <Grid sx={{placeItems:'center'}} container>
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
                <IconButton sx={{marginLeft:"auto"}} variant="contained">{" "}<AccountCircleSharpIcon/></IconButton>
              {/* <Button >Login</Button>
              <Button sx={{marginLeft:1}} variant="contained">Signup</Button> */}
            </Box>
          </Grid>
        </Grid>
    }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
