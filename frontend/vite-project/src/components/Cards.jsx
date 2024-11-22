// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { green, red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ChatIcon from '@mui/icons-material/Chat';

// const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
//   marginLeft: 0,
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   transform: expand ? "rotate(180deg)" : "rotate(0deg)",
// }));

// const Cards = () => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://media.istockphoto.com/id/1930917419/photo/close-up-portrait-of-a-smiling-brazilian-woman-enjoying-the-forest-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=ms9hfN_MTnb4OyTTf0bROyapcbHpmaQ4yo7GQeTebNo="
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//           <ChatIcon />
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//          <AcUnitIcon />
        
        
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
         
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste facili
            
//           </Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Add rice and stir very gently to distribute. Top with artichokes and
            
        
//           </Typography>
//           <Typography>
//             Set aside off of the heat 
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };

// export default Cards;

























































































import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import AcUnitIcon from '@mui/icons-material/AcUnit';

// ExpandMore button styling
const ExpandMore = styled(IconButton)(({ theme, expand }) => ({
  marginLeft: 0,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

// Cards component that displays user information dynamically
const Cards = ({ avatar, username, skills, media }) => {
  const [expanded, setExpanded] = React.useState(false);

  // Handle expand/collapse of the card content
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          // Avatar from user data (either default or passed as prop)
          <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe" src={avatar}>
            {username ? username[0] : "U"} {/* Fallback to the first letter of username */}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={username}
        subheader="User profile"
      />

      {/* Displaying user media (images/videos) */}
      <CardMedia
        component="img"
        height="194"
        image={media[0] || "https://via.placeholder.com/500"} // Display first media item (fallback image)
        alt="User Media"
      />

      <CardContent>
        {/* Displaying user skills */}
        <Typography variant="body2" color="text.secondary">
          Skills: {skills.join(", ")}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ChatIcon />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <AcUnitIcon />

        {/* Expand button for additional details */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      {/* Additional card content (could be more details about the user) */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            facilis, delectus!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Cards;

