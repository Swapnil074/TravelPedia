import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, InputBase, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";
import { useRadio, useRadioGroup, HStack, Box } from "@chakra-ui/react";

export default function Header({ setCoordinates }) {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState();
  const onLoad = (autocom) => setAutocomplete(autocom);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          className={classes.button}
          cursor="pointer"
          color={checkbox.checked ? "white" : "black"}
          _checked={{
            bg: "#000000",
            color: "#FFFFFF",
          }}
          _focus={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
          px={50}
          py={20}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  const options = ["restaurants", "hotels", "attractions"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "restaurants",
    onChange: console.log,
  });

  const group = getRootProps();

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
          <HStack
            {...group}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </div>
      </Toolbar>
    </AppBar>
  );
}
