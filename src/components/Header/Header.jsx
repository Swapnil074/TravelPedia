import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, InputBase, Box, Toolbar, Button } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";

export default function Header({ setCoordinates }) {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState();
  const onLoad = (autocom) => setAutocomplete(autocom);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <AppBar position="sticky" style={{ background: "#FFFFFF" }}>
      <Toolbar className={classes.toolbar}>
        <Box component="flex" sx={{ width: 700 }}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ fontSize: "35px", color: "#000000" }} />
              </div>
              <InputBase
                placeholder="Search"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
              <div className={classes.closeIcon}>
                <CloseIcon style={{ fontSize: "30px", color: "#000000" }} />
              </div>
            </div>
          </Autocomplete>
        </Box>
        <div className={classes.category}>
          <Button variant="contained" className={classes.button}>
            restaurant
          </Button>
          <Button variant="contained" className={classes.button}>
            hotels
          </Button>
          <Button variant="contained" className={classes.button}>
            attractions
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
