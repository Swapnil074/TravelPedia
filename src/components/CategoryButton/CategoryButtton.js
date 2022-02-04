import React from "react";
import { useRadio, useRadioGroup, HStack, Box } from "@chakra-ui/react";
import useStyles from "./styles";

export default function ToggleButton({ list }) {
  const RadioCard = (props) => {
    const classes = useStyles();
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
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  const options = list.slice();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "restaurants",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
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
  );
}
