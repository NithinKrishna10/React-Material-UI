import { Box, Typography ,styled} from '@mui/material';
import React from 'react';


const CustomizedTypography = styled(Typography)
    color: 00005;

    // :hover {
    //     color : #75125c;
    //     background: #afafaf;
    // };


const StyledComponent = () => {
    return (
        <Box>
            <CustomizedTypography>Hellow World</CustomizedTypography>
        </Box>
    );
}

export default StyledComponent;
