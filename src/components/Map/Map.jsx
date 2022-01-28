import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core"; // useMediaQuery is a hook that helps us to check if the screen is small or not
import LocationonOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";

export default function Map({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); //set bounds to topright and bottom left corners
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            className={classes.markerContainer}
            lat={place.latitude}
            lng={place.longitude}
          >
            {!isDesktop ? (
              <LocationonOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  gutterBottom
                  variant="subtitle2"
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.digiflynt.com/wp-content/uploads/2021/04/no_img.jpg"
                  }
                  alt={place.name}
                />
                <Rating
                  size="small"
                  value={Number(place.rating)}
                  readOnly={true}
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}
