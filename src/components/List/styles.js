import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
    margin: theme.spacing(0, 2),
  },
  filter: {
    display: "flex",
    padding: "25px",
    marginLeft: 0,
  },
  button: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "15px",
    margin: theme.spacing(1, 0.5, 1),
    fontSize: "18px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    margin: theme.spacing(1, 0, 0),
    overflow: "auto",
  },
}));
