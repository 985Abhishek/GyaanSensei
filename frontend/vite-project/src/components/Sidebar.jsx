// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
    const menuItems = ['Dashboard', 'Profile', 'Settings', 'Logout'];

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <List>
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