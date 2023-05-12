import { Box, Modal, Typography,Button } from '@mui/material';
import React, { useState } from 'react';

const ModalDemo = () => {
    
    const [open,setOpen] = useState(false)
    return (
        <div>
          <Button onClick={()=>{setOpen(true)}}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
            <Box position="absolute" top="150px" left="150px">
                <Typography>It is a Modal</Typography>
                <Button onClick={()=>{setOpen(false)}}>Close</Button>
            </Box>
            </Modal>

          {/* <Button onClick={()=>{setOpen(false)}}>Close</Button> */}


        </div>
    );
}

export default ModalDemo;
