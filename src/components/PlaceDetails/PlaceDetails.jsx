import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

export default function PlaceDetails({ places }) {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          places.photo
            ? places.photo.images.large.url
            : "https://www.digiflynt.com/wp-content/uploads/2021/04/no_img.jpg"
        }
        title={places.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {places.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1">{places.price_level}</Typography>
        </Box>
        {places?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {places?.address && (
          <Typography
            gutterBottom
            variant="subtitle"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {places.address}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
