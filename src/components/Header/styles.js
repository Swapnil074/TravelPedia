import { alpha, makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(5),
    padding: theme.spacing(0, 0, 1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    height: "70px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    left: theme.spacing(80),
    top: theme.spacing(0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputRoot: {
    color: "#000000",
    fontSize: "35px",
    padding: theme.spacing(0.75, 0),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 3, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    marginLeft: 10,
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: { width: "27.5ch" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: 90,
  },
  category: {
    position: "absolute",
    left: theme.spacing(120),
  },
  button: {
    height: "62px",
    width: "177.45px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "15px",
    margin: theme.spacing(0, 2),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "&:active": {
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
  },
}));
