
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
    const menuItems = ['Dashboard', 'Profile', 'Settings', 'Logout'];

    return (

        <Drawer anchor="left" open={open} onClose={onClose}  >
            <List sx={{width:"250px"}}>
                {menuItems.map((item) => (
                    <ListItem button key={item}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;