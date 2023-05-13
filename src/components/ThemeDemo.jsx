import { Box, Typography ,useTheme} from '@mui/material';
import React from 'react';

const ThemeDemo = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <div>
            <Box>
                <Typography color="primary">
                    Hellow World
                </Typography>
            </Box>
        </div>
    );
}

export default ThemeDemo;
