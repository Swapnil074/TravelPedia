import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "15px",
    margin: theme.spacing(1, 2, 1),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontSize: "18px",
  },
}));
