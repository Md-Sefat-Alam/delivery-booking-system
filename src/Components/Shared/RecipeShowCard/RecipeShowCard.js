import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function RecipeShowCard({ singlePost }) {
  const { date, img, pCost, pDescription, pType, pName, _id } = singlePost;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {pName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={pName}
        className="uppercase"
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt={pName + " photo"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {pDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to={`/buy/${_id}`}>
            <Button variant="outlined">
              <ShoppingCartIcon />
              <span>Buy</span>
            </Button>
          </Link>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <span className="font-bold text-gray-400 text-xl">Cost: {pCost}</span>
      </CardActions>
    </Card>
  );
}
