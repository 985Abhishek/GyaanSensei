import { Grid2 } from '@mui/material'
import React from 'react'
import InstagramPostCard from './instagramCard'

const multiplecards = () => {
  return (
    <Grid2 container spacing={2} justifyContent={"center"}>
        <Grid2 item xs={12} sm={6} md ={4}>
            <InstagramPostCard></InstagramPostCard>
        </Grid2>
        <Grid2 item xs={12} sm={6} md ={4}>
            <InstagramPostCard></InstagramPostCard>
        </Grid2>
        <Grid2 item xs={12} sm={6} md ={4}>
            <InstagramPostCard></InstagramPostCard>
        </Grid2>
        <Grid2 item xs={12} sm={6} md ={4}>
            <InstagramPostCard></InstagramPostCard>
        </Grid2>
        <Grid2 item xs={12} sm={6} md ={4}>
            <InstagramPostCard></InstagramPostCard>
        </Grid2>
        <Grid2 item xs={12} sm={6} md ={4}>
            <InstagramPostCard></InstagramPostCard>
        </Grid2>
    </Grid2>
  )
}

export default multiplecards