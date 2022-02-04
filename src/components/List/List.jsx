import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { useRadio, useRadioGroup, HStack, Box, Stack } from "@chakra-ui/react";
import StarIcon from "@material-ui/icons/Star";

export default function List({
  places,
  childClicked,
  isLoading,
  rating,
  setRating,
  setType,
  type,
}) {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
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
          border="0.5px solid #ccc"
          color={checkbox.checked ? "white" : "black"}
          _checked={{
            bg: "#000000",
            color: "#FFFFFF",
          }}
          _focus={{
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
          px={40}
          py={15}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  const options = ["0", "3", "4", "5"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "0",
    onChange: (e) => setRating(e),
  });

  const group = getRootProps();

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography
        variant="h4"
        style={{
          fontWeight: "bold",
        }}
      >
        rating
      </Typography>
      <div className={classes.filter}>
        <HStack
          {...group}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                <Stack isInline>
                  <StarIcon fontSize="medium" style={{ fill: "#FFD233" }} />
                  <Typography variant="h6">{value}+</Typography>
                </Stack>
              </RadioCard>
            );
          })}
        </HStack>
      </div>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
            }}
          >
            {" "}
            results
          </Typography>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
