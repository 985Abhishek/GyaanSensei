import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Avatar } from '@mui/material';
import { Favorite, Share, ChatBubbleOutline } from '@mui/icons-material';

const InstagramPostCard = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px', borderRadius: '10px' }}>
      {/* User Profile */}
      <CardContent sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0 }}>
        <Avatar
          sx={{ width: 40, height: 40, marginRight: '10px' }}
          alt="User Avatar"
          src="https://placekitten.com/100/100" // Replace with user image URL
        />
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Username
        </Typography>
      </CardContent>

      {/* Post Image */}
      <CardMedia
        component="img"
        height="auto"
        image="https://images.pexels.com/photos/18876270/pexels-photo-18876270.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" // Replace with post image URL
        alt="Post Image"
      />

      {/* Post Actions */}
      <CardContent sx={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <IconButton>
              <Favorite />
            </IconButton>
            <IconButton>
              <ChatBubbleOutline />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold' }}>
          120 Likes
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '10px' }}>
          <span style={{ fontWeight: 'bold' }}>Username</span> This is a cool caption!
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '5px' }}>
          5 minutes ago
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InstagramPostCard;
