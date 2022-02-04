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
import StarIcon from "@material-ui/icons/Star";

export default function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card
      elevation={6}
      style={{ borderRadius: 30, width: "650px", height: "500px" }}
    >
      <CardMedia
        style={{ height: 250 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.digiflynt.com/wp-content/uploads/2021/04/no_img.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Box
          style={{
            alignItems: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "60%",
          }}
        >
          <Typography
            display="inline"
            gutterBottom
            variant="h5"
            nowrap
            style={{
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            {place.name}
          </Typography>
          <Typography display="inline" variant="h6" color="textSecondary">
            {" "}
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            display="flex"
            justifyContent="space-between"
            style={{ marginTop: "5px" }}
          >
            <StarIcon
              fontSize="large"
              style={{ fill: "#FFD233", padding: 2, paddingBottom: 5 }}
            />
            <Typography variant="h6"> {Number(place.rating)}</Typography>
          </Box>
          <Box
            position="relative"
            top="-20px"
            justifyContent="space-between"
            marginLeft="50%"
          >
            {place?.cuisine?.map(({ name }) => (
              <Chip
                key={name}
                size="small"
                label={name}
                className={classes.chip}
              />
            ))}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          position="relative"
          top="-25px"
        >
          {place?.address && (
            <Typography
              gutterBottom
              variant=""
              color="textSecondary"
              className={classes.subtitle}
            >
              <LocationOnIcon style={{ marginInline: 5 }} /> {place.address}
            </Typography>
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          position="relative"
          top="-25px"
        >
          {place?.phone && (
            <Typography
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              className={classes.spacing}
            >
              <PhoneIcon style={{ marginInline: 5 }} /> {place.phone}
            </Typography>
          )}
        </Box>
        <CardActions>
          {place?.web_url && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip advisor
            </Button>
          )}
          {place?.website && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}
