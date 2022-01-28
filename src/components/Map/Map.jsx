import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core"; // useMediaQuery is a hook that helps us to check if the screen is small or not
import LocationonOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

export default function Map({ coordinates, setCoordinates, setBounds }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDplJjz6XqC1vvySIY-1dslcqvCowydCGw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }); //set bounds to topright and bottom left corners
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}
