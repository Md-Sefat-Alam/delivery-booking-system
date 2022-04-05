import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ServiceCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className="flex justify-center">
        <div className="text-center w-40 h-40 bg-orange-400 flex justify-center items-center rounded-full">
          <i class={`fas ${image ? image : "fa-print"} text-8xl`}></i>
        </div>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
